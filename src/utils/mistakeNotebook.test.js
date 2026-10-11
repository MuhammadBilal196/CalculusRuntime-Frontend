import { unresolvedMistakes, inferGuideCourse } from './mistakeNotebook';
const q={courseId:'linear-algebra',quizId:'la-test',prompt:'2+2?',options:['3','4'],correctIndex:1,selectedIndex:0,correct:false,occurredAt:'2026-10-07T10:00:00Z'};
const e=(eventId,data={})=>({eventId,kind:'question',data:{...q,...data}});
test('wrong answers remain until a later correct answer and can recur',()=>{
 expect(unresolvedMistakes([e('1')])).toHaveLength(1);
 expect(unresolvedMistakes([e('1'),e('2',{correct:true,occurredAt:'2026-10-07T11:00:00Z'})])).toHaveLength(0);
 expect(unresolvedMistakes([e('2',{correct:true}),e('3',{occurredAt:'2026-10-07T12:00:00Z'})])).toHaveLength(1);
});
test('option shuffling and out-of-order sync reconcile the same question',()=>{
 expect(unresolvedMistakes([e('later',{options:['4','3'],correctIndex:0,correct:true,occurredAt:'2026-10-07T11:00:00Z'}),e('earlier')])).toEqual([]);
});
test('different courses and different options are not incorrectly merged',()=>{
 expect(unresolvedMistakes([e('1'),e('2',{courseId:'other'}),e('3',{options:['4','5']})])).toHaveLength(3);
});
test('legacy LA history uses inferred course metadata',()=>{
 expect(unresolvedMistakes([e('1',{courseId:null}),e('2',{correct:true,occurredAt:'2026-10-07T11:00:00Z'})])).toEqual([]);
 expect(inferGuideCourse('ps-checkpoint','/')).toBe('probability-statistics');
});
