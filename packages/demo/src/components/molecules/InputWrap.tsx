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
  gap: 2px;
`;

export interface InputWrapProps {
  children?: React.ReactNode;
  addButtonProps?: Omit<SquareButtonProps, 'iconType'>;
  removeButtonProps?: Omit<SquareButtonProps, 'iconType'>;
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
        <SquareButton
          aria-label="menu"
          iconType="menu"
          onClick={handleMenuOpen}
        />
        {isOpen ? (
          <SquareButton aria-label="add" iconType="add" {...addButtonProps} />
        ) : null}
        {isOpen ? (
          <SquareButton
            aria-label="remove"
            iconType="remove"
            {...removeButtonProps}
          />
        ) : null}
      </HandleBox>
    </Wrap>
  );
};
export default InputWrap;
