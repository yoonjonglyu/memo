import React from 'react';
import styled from 'styled-components';

import Modal from '../../components/molecules/Modal';
import LargeButton from '../../components/atoms/LargeButton';

import useImport from '../../hooks/useImport';

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

export interface SettingImportProps {
  handleStep: Function;
}

const SettingImport: React.FC<SettingImportProps> = ({ handleStep }) => {
  const { importJSON } = useImport();
  return (
    <Modal
      header="Import Data"
      children={
        <ModalList>
          <li>
            <p>
              <strong>Warning</strong>
              <br />
              import data format is this App export type.
            </p>
          </li>
          <li>
            <LargeButton onClick={importJSON}>JSON</LargeButton>
          </li>
        </ModalList>
      }
      footer={<LargeButton onClick={() => handleStep(0)}>Cancel</LargeButton>}
    />
  );
};

export default SettingImport;
