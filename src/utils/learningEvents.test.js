import { queueLearningEvents, syncLearningEvents, readLearningState } from './learningEvents';
const user = { username: 'alice', accessToken: 'secret' };
const event = (id='one') => ({eventId:id,kind:'flashcard',data:{cardId:'card',rating:'Good',occurredAt:'2026-10-07T10:00:00Z'}});
const ok = (body={items:[],next_cursor:null}) => ({ok:true,json:async()=>body});
beforeEach(()=> {localStorage.clear(); global.fetch=jest.fn(async()=>ok());});
afterEach(()=>delete global.fetch);
test('signed-out writes do not create storage',()=>{expect(queueLearningEvents(null,[event()])).toBe(false);expect(localStorage.length).toBe(0);});
test('offline outbox survives and retries without storing tokens',async()=>{
 global.fetch.mockRejectedValue(new Error('offline'));
 expect(queueLearningEvents(user,[event()])).toBe(true); await syncLearningEvents(user);
 expect(readLearningState(user).pending).toEqual(['one']);
 expect(localStorage.getItem('calcvoyager_learning_v1:alice')).not.toContain('secret');
 global.fetch.mockImplementation(async()=>ok());await syncLearningEvents(user);
 expect(readLearningState(user).pending).toEqual([]);expect(readLearningState(user).events).toHaveLength(1);
});
test('duplicate events queue once and accounts are isolated',async()=>{
 queueLearningEvents(user,[event(),event()]);await syncLearningEvents(user);
 expect(readLearningState(user).events).toHaveLength(1);
 expect(readLearningState({...user,username:'bob'}).events).toEqual([]);
 expect(global.fetch.mock.calls[0][1].headers.Authorization).toBe('Bearer secret');
});
test('remote pagination merges with local pending changes',async()=>{
 global.fetch.mockImplementation(async(url,opts)=>opts.method==='POST'?ok():url.endsWith('after=0')?ok({items:[{id:4,event:event('remote')}],next_cursor:4}):ok());
 queueLearningEvents(user,[event()]);await syncLearningEvents(user);
 expect(readLearningState(user).events.map(e=>e.eventId).sort()).toEqual(['one','remote']);
 expect(readLearningState(user).cursor).toBe(4);
});
test('invalid and corrupt caches are preserved',async()=>{
 localStorage.setItem('calcvoyager_learning_v1:alice','broken');
 expect(queueLearningEvents(user,[event()])).toBe(false);expect(await syncLearningEvents(user)).toBe(false);
 expect(localStorage.getItem('calcvoyager_learning_v1:alice')).toBe('broken');
});
test('failed upload preserves pending records',async()=>{
 global.fetch.mockImplementation(async(url,opts)=>opts.method==='POST'?{ok:false,status:503}:ok());
 queueLearningEvents(user,[event()]);await syncLearningEvents(user);
 expect(readLearningState(user).pending).toEqual(['one']);expect(readLearningState(user).error).toContain('503');
});
