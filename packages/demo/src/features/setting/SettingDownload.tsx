import React from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

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

export interface SettingDownloadProps {}

const SettingDownload: React.FC<SettingDownloadProps> = () => {
  return (
    <Modal
      header="Download"
      children={
        <ModalList>
          <li>
            <LargeButton>Web</LargeButton>
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
      footer={<LargeButton>Cancel</LargeButton>}
    />
  );
};

export default SettingDownload;
