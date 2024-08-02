import React, { useState } from 'react';

import MemoHeader from '../features/memo/MemoHeader';
import MemoFeature from '../features/memo';

export interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  
  return (
    <>
      <MemoHeader
        handleEdit={() => setIsEdit(prev => !prev)}
        handleSetting={() => setIsSetting(prev => !prev)}
      />
      <MemoFeature isEdit={isEdit} />
    </>
  );
};

export default IndexPage;
