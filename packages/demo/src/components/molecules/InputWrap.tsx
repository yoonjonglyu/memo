import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SquareButton, { SquareButtonProps } from './SquareButton';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;
const HandleBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: auto !important;
  margin-left: 2px;
  gap: 2px;
`;

export interface InputWrapProps {
  children?: React.ReactNode;
  addButtonProps?: SquareButtonProps;
  removeButtonProps?: SquareButtonProps;
}

const InputWrap: React.FC<InputWrapProps> = ({
  children,
  addButtonProps,
  removeButtonProps,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Wrap>
      {children}
      <HandleBox>
        <SquareButton iconType="menu" onClick={handleMenuOpen} />
        {isOpen ? <SquareButton iconType="add" {...addButtonProps} /> : null}
        {isOpen ? (
          <SquareButton iconType="remove" {...removeButtonProps} />
        ) : null}
      </HandleBox>
    </Wrap>
  );
};
export default InputWrap;
