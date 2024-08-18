import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

const DelectBtn = styled.button`
  height: 24px;
  padding: 0;
  margin: auto;
  margin-right: 0;
  background: none;
  border: none;
  border-radius: 2px;
  font-size: 1.5rem;
`;

export interface RemoveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RemoveButton: React.FC<RemoveButtonProps> = (props) => {
  return (
    <DelectBtn {...props}>
      <FontAwesomeIcon icon={faSquareMinus} />
    </DelectBtn>
  );
};

export default RemoveButton;
