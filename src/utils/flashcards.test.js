import { FLASHCARDS, FLASHCARD_COURSES, rateCard, flashcardProgress, dueCounts } from './flashcards';
import { LA_MODULES, LA_EXPANSION_MODULES } from '../data/laModules';
const at='2026-10-07T10:00:00Z', time=Date.parse(at);
test('every published additional LA topic has four dedicated cards without replacing the original decks',()=>{
 const la=FLASHCARDS.filter(c=>c.courseId==='linear-algebra');
 expect(la).toHaveLength(119);
 for(const module of [...LA_MODULES,...LA_EXPANSION_MODULES]) {
  for(const topic of module.topics) {
   const cards=la.filter(c=>c.id.startsWith(`la-${topic.id}:`));
   expect(cards).toHaveLength(4);
   expect(cards.every(c=>c.topic===topic.title && c.note)).toBe(true);
  }
 }
 expect(la.filter(c=>c.id.startsWith('la-equations:'))).toHaveLength(4);

});
test('all four courses have populated formula decks and stable unique IDs',()=>{
 expect(new Set(FLASHCARDS.map(c=>c.id)).size).toBe(FLASHCARDS.length);
 for(const id of Object.values(FLASHCARD_COURSES)) expect(FLASHCARDS.filter(c=>c.courseId===id).length).toBeGreaterThan(0);
 for(const c of FLASHCARDS){expect(c.courseId).toBeDefined();expect(c.front).toBeTruthy();expect(c.back).toBeTruthy();}
});
test.each([['Again',1,600000],['Good',2,2*86400000],['Easy',3,4*86400000]])('%s schedules the specified box and interval',(rating,box,delay)=>{
 expect(rateCard(null,rating,at)).toEqual({box,dueAt:time+delay,reviewedAt:time});
});
test('highest box is capped and Again resets any box',()=>{
 expect(rateCard({box:5},'Easy',at).box).toBe(5);expect(rateCard({box:5},'Again',at).box).toBe(1);
 expect(()=>rateCard(null,'Other',at)).toThrow();expect(()=>rateCard(null,'Good','invalid')).toThrow();
});
test('replayed and out-of-order events produce a deterministic schedule',()=>{
 const a={eventId:'a',kind:'flashcard',data:{cardId:'c',rating:'Easy',occurredAt:at}};
 const b={eventId:'b',kind:'flashcard',data:{cardId:'c',rating:'Good',occurredAt:'2026-10-08T10:00:00Z'}};
 expect(flashcardProgress([b,a,a]).c.box).toBe(4);
});
test('due counts include unseen and overdue cards but exclude future days',()=>{
 const cards=['a','b','c','d'].map(id=>({id}));
 expect(dueCounts(cards,{b:{dueAt:time-1},c:{dueAt:time+60000},d:{dueAt:time+86400000}},time)).toEqual({now:2,today:3});
});
