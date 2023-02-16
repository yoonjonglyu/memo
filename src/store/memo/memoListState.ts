import { atom } from 'recoil';

interface MemoProps {
  idx: string;
  type: 'memo';
  props: string;
}
interface TodoProps {
  idx: string;
  type: 'todo';
  props: Array<{ isAvail: boolean; todo: string }>;
}

const memoListState = atom<Array<MemoProps | TodoProps>>({
  key: 'memoList',
  default: [
    { idx: 'a1', type: 'memo', props: 'ss' },
    { idx: 'a2', type: 'todo', props: [{ isAvail: true, todo: 'aaa' }] },
  ],
});

export default memoListState;
