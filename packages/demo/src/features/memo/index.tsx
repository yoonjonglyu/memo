import React, { useEffect } from 'react';

import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoModal from './MemoModal';

import useMemo from '../../hooks/useMemo';

export interface MemoFeatureProps {
  isEdit: boolean
}

const MemoFeature: React.FC<MemoFeatureProps> = ({isEdit}) => {
  const { memoList, initMemo } = useMemo();

  useEffect(() => {
    initMemo();
  }, []);
  return (
      <BoardLayout>
        {memoList.map((item, index) => {
          return (
            <MemoItem
              key={item.idx}
              index={index}
              type={item.type}
              props={item.props}
              isEdit={isEdit}
            />
          );
        })}
        <MemoModal />
      </BoardLayout>
  );
};

export default MemoFeature;
