import React, { useState } from 'react';

import MemoHeader from '../features/memo/MemoHeader';
import MemoFeature from '../features/memo';
import SettingFeature from '../features/setting';

export interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const closeModal = () => setIsSetting(false);

  return (
    <>
      <MemoHeader
        handleEdit={() => setIsEdit(prev => !prev)}
        handleSetting={() => setIsSetting(prev => !prev)}
      />
      <MemoFeature isEdit={isEdit} />
      <SettingFeature isModal={isSetting} closeModal={closeModal} />
    </>
  );
};

export default IndexPage;
