import React from 'react';
import styled from 'styled-components';

import useType, { FuncProps } from '../../hooks/useType';

const Wrap = styled.div`
  margin: 2px;
  border: 0.5px solid gray;
`;
const H = styled.h2`
  width: 100%;
  min-height: 2rem;
  margin: 3px 0;
  outline: none;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export interface H2Props {
  value: string;
  setValue: Function;
  func: FuncProps
}

const H2: React.FC<H2Props> = ({ value, setValue, func }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 500,
    func: func
  });
  return (
    <Wrap>
      <H contentEditable="true" onKeyDown={handleType} suppressContentEditableWarning={true}>
        {value}
      </H>
    </Wrap>
  );
};

export default H2;
