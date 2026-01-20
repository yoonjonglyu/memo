import React from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import useDownload from '../../hooks/useDownload';

const ModalList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 8px;
  margin: 6px auto;
  padding: 0;
  list-style: none;
  & li {
    display: inline-block;
    width: 80px;
  }
`;

export interface SettingDownloadProps {
  handleStep: Function;
}

const SettingDownload: React.FC<SettingDownloadProps> = ({ handleStep }) => {
  const { downloadWeb, downloadAnd } = useDownload();

  const waitUpdate = () => alert('To be updated');

  return (
    <Modal
      header="Platform"
      children={
        <ModalList>
          <li>
            <LargeButton onClick={() => downloadWeb()}>Web</LargeButton>
          </li>
          <li>
            <LargeButton
              onClick={() => downloadAnd()}
            >
              And
            </LargeButton>
          </li>
          <li>
            <LargeButton
              style={{ opacity: '0.5' }}
              onClick={waitUpdate}
            >
              IOS
            </LargeButton>
          </li>
        </ModalList>
      }
      footer={<LargeButton onClick={() => handleStep(0)}>Cancel</LargeButton>}
    />
  );
};

export default SettingDownload;
