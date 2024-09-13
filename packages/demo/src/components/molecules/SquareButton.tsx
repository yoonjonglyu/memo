import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';

const Btn = styled.button`
  width: 21px;
  height: 21px;
  padding: 0;
  margin: auto;
  margin-right: 0;
  background: none;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  background: black;
  color: white;
  box-sizing: border-box;
`;

type ButtonType = 'add' | 'remove' | 'menu';

export interface SquareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: ButtonType;
}

const SquareButton: React.FC<SquareButtonProps> = ({ iconType, ...props }) => {
  return (
    <Btn {...props}>
      <FontAwesomeIcon icon={handleIcon(iconType)} />
    </Btn>
  );
};

export default SquareButton;

const handleIcon = (type: ButtonType) => {
  switch (type) {
    case 'add':
      return faPlus;
    case 'remove':
      return faMinus;
    case 'menu':
      return faBars;
    default:
      return faBars;
  }
};
