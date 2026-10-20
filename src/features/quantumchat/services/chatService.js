import client from "../api/client";
import {
  findSecretKeyForPublicKey,
  getCurrentKeySet,
} from "../crypto/keyStorage";
import { pickRandom, sealMessage, unsealMessage } from "../crypto/keys";

function asUserArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.friends)) return payload.friends;
  if (Array.isArray(payload?.users)) return payload.users;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function asMessageArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.messages)) return payload.messages;
  return [];
}

export async function fetchFriends() {
  const { data } = await client.get("/users/friends");
  return asUserArray(data?.data);
}

export async function fetchDiscoverUsers(
  query = "",
  { limit = 200, cursor = null } = {},
) {
  const { data } = await client.get("/users/discover", {
    params: {
      ...(query ? { q: query } : {}),
      limit,
      ...(cursor ? { cursor } : {}),
    },
  });
  return {
    users: asUserArray(data?.data),
    hasMore: Boolean(data?.meta?.hasMore),
    nextCursor: data?.meta?.nextCursor || null,
  };
}

/** Load every discoverable non-friend page (capped for safety). */
export async function fetchAllDiscoverUsers(query = "", { pageSize = 200, maxPages = 10 } = {}) {
  const all = [];
  let cursor = null;
  for (let page = 0; page < maxPages; page += 1) {
    const { users, hasMore, nextCursor } = await fetchDiscoverUsers(query, {
      limit: pageSize,
      cursor,
    });
    all.push(...users);
    if (!hasMore || !nextCursor) break;
    cursor = nextCursor;
  }
  return all;
}

export async function fetchUser(userId) {
  const { data } = await client.get(`/users/${userId}`);
  return data?.data || null;
}

export async function fetchConversation(peerId, { limit = 80, markRead = true } = {}) {
  const { data } = await client.get(`/messages/${peerId}`, {
    params: { limit, markRead: markRead ? "1" : "0" },
  });
  return asMessageArray(data?.data);
}

/** Recent DMs/groups since `since` ISO cursor — used for dock inbox badges. */
export async function syncInbox(sinceIso) {
  const { data } = await client.get("/messages/sync", {
    params: sinceIso ? { since: sinceIso } : undefined,
  });
  return {
    messages: asMessageArray(data?.data),
    cursor: data?.meta?.cursor || null,
  };
}

export async function markPeerConversationRead(peerId) {
  await client.post(`/messages/${peerId}/read`);
}

export function decryptMessage(raw, myUserId) {
  const isMine = String(raw.from) === String(myUserId);
  const envelope = isMine ? raw.forSender : raw.forRecipient;
  if (!envelope?.targetPublicKey) {
    return { ...raw, id: raw.id || raw._id, text: null };
  }
  const mySecretKey = findSecretKeyForPublicKey(myUserId, envelope.targetPublicKey);
  const text = mySecretKey ? unsealMessage(envelope, mySecretKey) : null;
  return {
    ...raw,
    id: raw.id || raw._id,
    text,
  };
}

/** My local key pairs that are still published on the server (the server rejects others). */
function pickMySendKey(myUserId, myPublishedKeys) {
  const local = getCurrentKeySet(myUserId);
  const published = new Set(
    (myPublishedKeys || []).map((k) => String(k).toLowerCase()),
  );
  const usable = published.size
    ? local.filter((k) => published.has(k.publicKey))
    : local;
  return pickRandom(usable.length ? usable : local);
}

export async function sendDirectMessage({ myUserId, myPublishedKeys, peer, text }) {
  const trimmed = (text || "").trim();
  if (!trimmed) throw new Error("Message cannot be empty");
  if (!peer?.id && !peer?._id) throw new Error("No recipient selected");

  const peerId = peer.id || peer._id;
  // Always use the recipient's current keys: contact lists are cached, and a new
  // account (or new device) may have published different keys since they loaded.
  let recipient = peer;
  try {
    recipient = (await fetchUser(peerId)) || peer;
  } catch {
    // Fall back to the cached keys; the server will reject them if stale.
  }

  const myKey = pickMySendKey(myUserId, myPublishedKeys);
  const recipientKeys = (recipient.publicKeys || []).filter(Boolean);
  if (!myKey?.publicKey) {
    throw new Error("Your encryption keys are not on this device — import your key file.");
  }
  if (recipientKeys.length === 0) {
    throw new Error("This person hasn't set up encryption keys yet.");
  }

  const forRecipient = sealMessage(trimmed, pickRandom(recipientKeys));
  const forSender = sealMessage(trimmed, myKey.publicKey);
  const { data } = await client.post("/messages", {
    to: peerId,
    forRecipient,
    forSender,
  });
  return data?.data;
}
