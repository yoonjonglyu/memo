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
  const { isAvail, donwloadWeb } = useDownload();

  return (
    <Modal
      header="Download"
      children={
        <ModalList>
          <li>
            <LargeButton
              onClick={donwloadWeb}
              disabled={!isAvail}
              style={{ opacity: isAvail ? '1' : '0.5' }}
            >
              Web
            </LargeButton>
          </li>
          <li>
            <LargeButton disabled style={{ opacity: '0.5' }}>
              And
            </LargeButton>
          </li>
          <li>
            <LargeButton disabled style={{ opacity: '0.5' }}>
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
