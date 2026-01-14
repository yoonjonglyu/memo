import { atom, selector } from 'recoil';

import MemoConfigState from '../config/memoConfigState';

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

export const MemoListState = selector<Array<MemoListStateProps>>({
  key: 'memolist',
  get: ({ get }) => {
    const { sort } = get(MemoConfigState);
    const memo = get(MemoState);
    const state = [...memo.list];

    // 원본 보호를 위해 복사 후 정렬하여 UI에 반환
    return sort === 'oldest' ? state : state.reverse();
  },

  set: ({ get, set }, newValue) => {
    // newValue가 DefaultValue(초기화)인 경우를 대비한 가드
    if (!(newValue instanceof Array)) return;
    const { sort } = get(MemoConfigState);
    const state = [...newValue];
    const sortedToSave = sort === 'oldest' ? state : state.reverse();

    set(MemoState, prev => ({
      ...prev,
      list: sortedToSave,
      date: performance.now(),
    }));
  },
});

export default MemoState;
