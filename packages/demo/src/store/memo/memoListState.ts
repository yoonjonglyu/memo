import { atom, selector } from 'recoil';

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
interface NoteProps {
  idx: string;
  type: 'note';
  props: Array<{ idx: number; type: string; value: string }>;
}
interface DraftProps {
  idx: string;
  type: 'draft';
  props: string;
}

export type MemoListStateProps = MemoProps | TodoProps | NoteProps | DraftProps;

export interface MemoStateProps {
  list: Array<MemoListStateProps>;
  date: number | null;
}

const MemoState = atom<MemoStateProps>({
  key: 'memo',
  default: { list: [], date: null },
});

export const memoListState = selector<Array<MemoListStateProps>>({
  key: 'memolist',
  get: ({ get }) => {
    const memo = get(MemoState);
    return memo.list;
  },
});

export default MemoState;
