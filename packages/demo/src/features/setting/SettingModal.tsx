import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import { ModalPortal } from '../../providers/ModalProvider';
import useGPicker from '../../hooks/useGPicker';
import useMemo from '../../hooks/useMemo';

const ModalList = styled.ul`
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    margin: 8px 0;
  }
  & li p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #6c6c6c;
  }
`;

export interface SettingModalProps {
  handleStep: Function;
  closeModal: VoidFunction;
}

const SettingModal: React.FC<SettingModalProps> = ({
  handleStep,
  closeModal,
}) => {
  const [syncId, setSyncID] = useState('');
  const { initMemo } = useMemo();
  // @ts-ignore
  const [openPicker, auth, downloadInfo] = useGPicker(googleCID, googleDevKey);
  useEffect(() => {
    if (syncId.length > 0) syncDriveMemo();
  }, [syncId]);
  const syncDriveMemo = async () => {
    await downloadInfo(syncId, auth.access_token);
    await initMemo();
  };

  return (
    <ModalPortal>
      <Modal
        header="Setting"
        children={
          <ModalList>
            <li>
              <LargeButton
                onClick={() => openPicker((id: string) => setSyncID(id))}
              >
                Sync
              </LargeButton>
            </li>
            <li>
              <LargeButton onClick={() => handleStep(1)}>Import</LargeButton>
            </li>
            <li>
              <LargeButton onClick={() => handleStep(2)}>Export</LargeButton>
            </li>
            <li>
              <LargeButton onClick={() => handleStep(3)}>Download</LargeButton>
            </li>
            <li>
              <p>
                <strong>App Info</strong>
                <br />
                <strong>version:</strong> v1.0.1
                <br />
                <strong>email:</strong> yunjonglyu@gmail.com
              </p>
            </li>
          </ModalList>
        }
        footer={<LargeButton onClick={closeModal}>Cancel</LargeButton>}
      />
    </ModalPortal>
  );
};

export default SettingModal;
