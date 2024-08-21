import React from 'react';
import styled from 'styled-components';

import RemoveButton, { RemoveButtonProps } from './RemoveButton';

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const HandleBox = styled.div`
  width: auto !important;
  margin-left: 2px;
`;

export interface InputWrapProps {
  children?: React.ReactNode;
  removeButtonProps?: RemoveButtonProps;
}

const InputWrap: React.FC<InputWrapProps> = ({
  children,
  removeButtonProps,
}) => {
  return (
    <Wrap>
      {children}
      <HandleBox>
        <RemoveButton {...removeButtonProps} />
      </HandleBox>
    </Wrap>
  );
};
export default InputWrap;
