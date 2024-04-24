import React from 'react';
import styled from 'styled-components';

import useType, { FuncProps } from '../../hooks/useType';

const Wrap = styled.div`
  margin: 8px;
  border: 0.5px solid gray;
`;
const H = styled.h1`
  width: 100%;
  min-height: 2.4rem;
  outline: none;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.4rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export interface H1Props {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const H1: React.FC<H1Props> = ({ value, setValue, func }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 500,
    func: func,
  });
  return (
    <Wrap>
      <H
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
      >
        {value}
      </H>
    </Wrap>
  );
};

export default H1;
