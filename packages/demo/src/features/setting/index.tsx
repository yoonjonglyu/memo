import React, { useState } from 'react';

import { ModalPortal } from '../../providers/ModalProvider';
import SettingModal from './SettingModal';
import SettingImport from './SettingImport';
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
  useDownload();

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

// SettingModal 등 하위 컴포넌트도 같은 톤앤매너로 수정되었다고 가정
const SettingContents: React.FC<SettingContentsProps> = ({
  isStep,
  handleStep,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-white border-t-8 border-memo-o shadow-2xl overflow-hidden rounded-b-xl">
        <div className="p-6">
          <SettingStep
            isStep={isStep}
            handleStep={handleStep}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

interface SettingStepProps extends SettingContentsProps {}

// 가독성을 위한 Step 분리 예시
const SettingStep: React.FC<SettingStepProps> = ({
  isStep,
  handleStep,
  closeModal,
}) => {
  switch (isStep) {
    case 1:
      return <SettingImport handleStep={handleStep} />;
    case 2:
      return <SettingExport handleStep={handleStep} />;
    case 3:
      return <SettingDownload handleStep={handleStep} />;
    default:
      return <SettingModal handleStep={handleStep} closeModal={closeModal} />;
  }
};
