import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  
`;
const HandleBox = styled.div``;

export interface InputWrapProps {
  chlidren?: React.ReactNode;
}

const InputWrap: React.FC<InputWrapProps> = ({ chlidren }) => {
  return <Wrap><HandleBox></HandleBox>{chlidren}</Wrap>;
};
export default InputWrap;
