import React, { useEffect, useState } from 'react';

import MemoHeader from './MemoHeader';
import BoardLayout from '../../components/layouts/BoardLayout';
import MemoItem from './MemoItem';
import MemoModal from './MemoModal';

import useMemo from '../../hooks/useMemo';

export interface MemoFeatureProps {}

const MemoFeature: React.FC<MemoFeatureProps> = () => {
  const { memoList, initMemo } = useMemo();
  const [isEdit, setIsEdit] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  useEffect(() => {
    initMemo();
  }, []);
  // 동일한 추상화 레벨을 유지해야한다. 해당 컴포넌트는 기존의 컴포넌트들을 결합하는 역할에 충실해야지
  // 여기서 UI 상세를 구축하면 동일한 추상화 단계가 아니다.
  return (
    <>
      <MemoHeader
        handleEdit={() => setIsEdit(prev => !prev)}
        handleSetting={() => setIsSetting(prev => !prev)}
      />
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
    </>
  );
};

export default MemoFeature;
