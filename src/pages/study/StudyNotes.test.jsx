import {render,screen,fireEvent,waitFor,within,act} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import StudyNotes from './StudyNotes';
import GuideNotesLayer from './GuideNotesLayer';
import {syncLearningEvents,readLearningState} from '../../utils/learningEvents';
let mockUser;
jest.mock('../../context/AuthContext',()=>({useAuth:()=>({user:mockUser})}));
beforeEach(()=>{localStorage.clear();mockUser={username:'alice',accessToken:'x'};global.fetch=jest.fn(async()=>({ok:true,json:async()=>({items:[],next_cursor:null})}));});
afterEach(async()=>{await act(async()=>{await syncLearningEvents(mockUser);});delete global.fetch;});
test('notes require login',()=>{mockUser=null;render(<MemoryRouter><StudyNotes/></MemoryRouter>);expect(screen.getByRole('link',{name:'Log in'})).toBeInTheDocument();});
test('guide panel saves section-linked notes; notes page edits and deletes them',async()=>{
 const view=render(<MemoryRouter initialEntries={['/linear-algebra/vectors/1']}><div className="study-guide-page"><section id="intro"><h2>Vector basics</h2><p>A basis is independent.</p></section></div><GuideNotesLayer/></MemoryRouter>);
 const panel=await screen.findByLabelText('Notes for Vector basics');
 fireEvent.click(within(panel).getByText('Notes & highlights for this section'));
 fireEvent.change(within(panel).getByLabelText('Your note'),{target:{value:'Remember independence'}});
 fireEvent.click(within(panel).getByRole('button',{name:'Save note'}));
 await waitFor(()=>expect(readLearningState(mockUser).events).toHaveLength(1));
 expect(readLearningState(mockUser).events[0].data.sectionId).toBe('/linear-algebra/vectors/1#intro');
 view.unmount();render(<MemoryRouter><StudyNotes/></MemoryRouter>);
 expect(screen.getByRole('link',{name:'Return to section'})).toHaveAttribute('href','/linear-algebra/vectors/1#intro');
 fireEvent.change(screen.getByLabelText('Your note'),{target:{value:'Updated note'}});fireEvent.click(screen.getByRole('button',{name:'Save note'}));
 expect(screen.getByDisplayValue('Updated note')).toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:'Delete note'}));
 await waitFor(()=>expect(screen.queryByRole('link',{name:'Return to section'})).not.toBeInTheDocument());
});
test('guest guide panels do not expose stored account notes',async()=>{
 mockUser=null;render(<MemoryRouter><div className="study-guide-page"><section id="intro"><h2>Guest guide</h2></section></div><GuideNotesLayer/></MemoryRouter>);
 expect(await screen.findByRole('link',{name:'Sign in'})).toBeInTheDocument();expect(screen.queryByLabelText('Your note')).not.toBeInTheDocument();
});

describe('restored lesson highlights',()=>{
 let originalCss, originalHighlight;
 beforeEach(()=>{
  originalCss=window.CSS;originalHighlight=window.Highlight;
  window.CSS={...originalCss,highlights:new Map()};
  window.Highlight=class extends Set {constructor(...ranges){super(ranges);}};
 });
 afterEach(()=>{window.CSS=originalCss;window.Highlight=originalHighlight;});
 const guide=()=> <MemoryRouter initialEntries={['/linear-algebra/vectors/1']}>
  <div className="study-guide-page"><section id="intro"><h2>Vectors</h2><p>A basis is independent.</p></section></div><GuideNotesLayer/>
 </MemoryRouter>;
 test('saving, remounting, editing and deleting a quote refreshes painted ranges',async()=>{
  let view=render(guide());
  const panel=await screen.findByLabelText('Notes for Vectors');
  fireEvent.change(within(panel).getByLabelText('Highlighted excerpt'),{target:{value:'basis'}});
  fireEvent.click(within(panel).getByRole('button',{name:'Save note'}));
  await waitFor(()=>expect(window.CSS.highlights.get('saved-study-notes')?.size).toBe(1));
  expect([...window.CSS.highlights.get('saved-study-notes')][0].toString()).toBe('basis');
  view.unmount();expect(window.CSS.highlights.has('saved-study-notes')).toBe(false);
  view=render(guide());
  await waitFor(()=>expect(window.CSS.highlights.get('saved-study-notes')?.size).toBe(1));
  view.unmount();view=render(<MemoryRouter><StudyNotes/></MemoryRouter>);
  fireEvent.change(screen.getByLabelText('Highlighted excerpt'),{target:{value:'independent'}});
  fireEvent.click(screen.getByRole('button',{name:'Save note'}));
  view.unmount();view=render(guide());
  await waitFor(()=>expect([...window.CSS.highlights.get('saved-study-notes') || []][0]?.toString()).toBe('independent'));
  view.unmount();view=render(<MemoryRouter><StudyNotes/></MemoryRouter>);
  fireEvent.click(screen.getByRole('button',{name:'Delete note'}));
  view.unmount();render(guide());
  await waitFor(()=>expect(window.CSS.highlights.has('saved-study-notes')).toBe(false));
 });
 test('account changes and logout clear the previous account highlights',async()=>{
  const view=render(guide());
  const panel=await screen.findByLabelText('Notes for Vectors');
  fireEvent.change(within(panel).getByLabelText('Highlighted excerpt'),{target:{value:'basis'}});
  fireEvent.click(within(panel).getByRole('button',{name:'Save note'}));
  await waitFor(()=>expect(window.CSS.highlights.has('saved-study-notes')).toBe(true));
  await act(async()=>{await syncLearningEvents(mockUser);});
  mockUser={username:'bob',accessToken:'y'};view.rerender(guide());
  await waitFor(()=>expect(window.CSS.highlights.has('saved-study-notes')).toBe(false));
  mockUser=null;view.rerender(guide());
  expect(await screen.findByRole('link',{name:'Sign in'})).toBeInTheDocument();
  expect(window.CSS.highlights.has('saved-study-notes')).toBe(false);
 });
 test('unsupported browsers keep excerpts usable and explain the limitation',async()=>{
  delete window.CSS.highlights;
  render(guide());
  expect(await screen.findByText(/cannot display coloured lesson highlights/)).toBeInTheDocument();
  expect(screen.getByLabelText('Highlighted excerpt')).toBeInTheDocument();
 });
});
