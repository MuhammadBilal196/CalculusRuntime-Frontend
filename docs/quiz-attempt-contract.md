# Shared question-attempt contract — proposed v1

Status: implemented producer foundation; Dev 2 agreement is pending. No claim of
cross-team approval is made. Review this contract together before merging consumers
such as the Mistake Notebook or Flashcards. No messages were sent to Dev 2.

## Scope and storage

The guide, Practice Arena and certificate quiz use one recorder. Only a session
with a username and accessToken writes history. Guests retain normal quiz behavior.
Records are local to this browser, under an encoded username key. They do not sync
across devices; the existing backend stores certificate summary attempts only.
This is browser-local learning history, not trusted certificate evidence. Do not
use it to grant scores, completion or certificates. No tokens are serialized.

Read with readQuizAttempts(user); clear one account with clearQuizAttempts(user).
A logout hides the history through the reader but does not erase that account's
local data. Another account uses a different key. Shared-device owners should
clear history before removing an account. No UI for viewing or clearing is added
in this producer PR; those controls belong with the consumer feature.

## Record fields

| Field | Meaning |
| --- | --- |
| schemaVersion | 1 |
| attemptId | Local session identifier, renewed for retakes/new selections/accounts |
| responseId | Idempotence key within an attempt; guide retry submissions have distinct ordinals |
| source | guide, practice, certificate |
| courseId | Canonical course slug, or null for legacy guide callers without course metadata |
| quizId | Checkpoint, practice selection, or certificate quiz identifier |
| questionId | Bank ID where available, otherwise position within this attempt |
| prompt, options | Question snapshot; options remain in the displayed order |
| selectedIndex | Displayed option index, or null for an unanswered certificate item |
| correctIndex | Correct index in that same displayed order |
| correct | Computed from the two indices; unanswered is false |
| grading | client, or server-review for a successful certificate response |
| topic, difficulty | Available metadata; otherwise null |
| occurredAt | ISO timestamp when the response is recorded (certificate: grading response time) |

Question positions are not stable global content IDs. Consumers must not merge
questions across quizzes or assume the same positional ID means identical content.
Retain the prompt/options snapshot when grouping or migrating data. Legacy guide
courseId is intentionally unknown rather than guessed from a path. Guide replay
in mastery mode records each submission; assessed checkpoints record first answers.
Certificate records are emitted after successful server review, including null answers.

## Failure and retention behavior

Writes return {saved, reason?} and never throw into the quiz. Duplicate writes
return saved:true, duplicate:true. Invalid input, damaged cache and unavailable
storage return saved:false. Producers currently do not display a persistence notice;
quiz progression remains usable if history cannot be saved. Readers filter invalid
records; writers preserve damaged caches rather than overwrite them. There is no
automatic history truncation. Quota exhaustion preserves earlier data and rejects
new writes. Agree on retention and user-visible save status before shipping consumers.

## Dev 2 review checklist

- Agree on these field names, null semantics and first-answer versus mastery retries.
- Decide stable question IDs/content versions for legacy guide and certificate banks.
- Decide whether local-only storage is sufficient; otherwise specify an authenticated
  server endpoint, account ownership checks, retry policy and schema migrations.
- Agree on retention limits, export/delete controls and save-failure feedback.
- Add each Dev 2 producer using this shared module and run the shared tests.

No new dependency or backend endpoint is introduced. Certificate authority remains
with the server. This contract is a reviewable proposal, not a finalized cross-team API.
