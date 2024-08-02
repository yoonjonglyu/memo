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
  & li p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #6c6c6c;
  }
`;

export interface SettingExportProps {
  handleStep: Function;
}

const SettingExport: React.FC<SettingExportProps> = ({ handleStep }) => {
  return (
    <Modal
      header="Export Type"
      children={
        <ModalList>
          <li>
            <LargeButton>JSON</LargeButton>
          </li>
          <li>
            <LargeButton>MD</LargeButton>
          </li>
          <li>
            <LargeButton>HTML</LargeButton>
          </li>
        </ModalList>
      }
      footer={<LargeButton onClick={() => handleStep(0)}>Cancel</LargeButton>}
    />
  );
};

export default SettingExport;
