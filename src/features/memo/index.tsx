import React, { useState } from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';

interface MemoListProps {
  idx: string;
  type: 'memo' | 'todo';
}
interface MemoProps extends MemoListProps {
  type: 'memo';
  props: string;
}
interface TodoProps extends MemoListProps {
  type: 'todo';
  props: Array<{ isAvill: boolean; todo: string }>;
}

export interface MemoFeatureProps {}

const MemoFeature: React.FC<MemoFeatureProps> = () => {
  const [memoList, setMemoList] = useState<Array<MemoProps | TodoProps>>([
    { idx: 'aa', type: 'memo', props: 'ss' },
    { idx: 'aa', type: 'todo', props: [{ isAvill: true, todo: 'aaa' }] },
  ]);

  return (
    <BoardLayout>
      <div></div>
    </BoardLayout>
  );
};

export default MemoFeature;
