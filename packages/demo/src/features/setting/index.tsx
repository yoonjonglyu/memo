import React, { useState } from 'react';

import { ModalPortal } from '../../providers/ModalProvider';
import SettingModal from './SettingModal';
import SettingExport from './SettingExport';
import SettingDownload from './SettingDownload';

import useDownload from '../../hooks/useDownload';

export interface SettingFeatureProps {
  isModal: boolean;
  closeModal: VoidFunction;
}

const SettingFeature: React.FC<SettingFeatureProps> = ({
  isModal,
  closeModal,
}) => {
  const [isStep, setIsStep] = useState(0);

  return (
    <ModalPortal>
      {isModal ? (
        <SettingContents
          isStep={isStep}
          handleStep={setIsStep}
          closeModal={closeModal}
        />
      ) : null}
    </ModalPortal>
  );
};

export default SettingFeature;

interface SettingContentsProps {
  isStep: number;
  handleStep: Function;
  closeModal: VoidFunction;
}

const SettingContents: React.FC<SettingContentsProps> = ({
  isStep,
  handleStep,
  closeModal,
}) => {
  useDownload();

  switch (isStep) {
    case 1:
      return <SettingExport handleStep={handleStep} />;
    case 2:
      return <SettingDownload handleStep={handleStep} />;
    default:
      return <SettingModal handleStep={handleStep} closeModal={closeModal} />;
  }
};
