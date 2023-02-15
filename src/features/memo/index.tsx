import React, { useState } from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';

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

export interface MemoFeatureProps {}

const MemoFeature: React.FC<MemoFeatureProps> = () => {
  const [memoList, setMemoList] = useState<Array<MemoProps | TodoProps>>([
    { idx: 'a1', type: 'memo', props: 'ss' },
    { idx: 'a2', type: 'todo', props: [{ isAvail: true, todo: 'aaa' }] },
  ]);

  return (
    <BoardLayout>
      {memoList.map((item, index) => {
        return (
          <MemoItem
            key={item.idx}
            index={index}
            type={item.type}
            props={item.props}
            memoHandler={setMemoList}
          />
        );
      })}
    </BoardLayout>
  );
};

export default MemoFeature;
