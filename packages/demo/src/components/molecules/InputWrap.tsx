import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SquareButton, { SquareButtonProps } from './SquareButton';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const HandleBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: auto !important;
  margin-left: 2px;
`;

export interface InputWrapProps {
  children?: React.ReactNode;
  SquareButtonProps?: SquareButtonProps;
}

const InputWrap: React.FC<InputWrapProps> = ({
  children,
  SquareButtonProps,
}) => {
  return (
    <Wrap>
      {children}
      <HandleBox>
        <SquareButton iconType="menu" />
        <SquareButton iconType="add" />
        <SquareButton iconType="remove" {...SquareButtonProps} />
      </HandleBox>
    </Wrap>
  );
};
export default InputWrap;
