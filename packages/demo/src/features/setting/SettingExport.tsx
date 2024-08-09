import React from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import useExport from '../../hooks/useExport';

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
  const { exportJSON, exportHTML, exportMD } = useExport();

  return (
    <Modal
      header="Export Type"
      children={
        <ModalList>
          <li>
            <LargeButton onClick={exportJSON}>JSON</LargeButton>
          </li>
          <li>
            <LargeButton onClick={exportMD}>MD</LargeButton>
          </li>
          <li>
            <LargeButton onClick={exportHTML}>HTML</LargeButton>
          </li>
        </ModalList>
      }
      footer={<LargeButton onClick={() => handleStep(0)}>Cancel</LargeButton>}
    />
  );
};

export default SettingExport;
