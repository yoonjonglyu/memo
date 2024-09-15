import React from 'react';
import styled from 'styled-components';

import useType, { FuncProps } from '../../hooks/useType';

const Wrap = styled.div`
  margin: 2px;
  border: 0.5px solid gray;
`;
const H = styled.h6`
  width: 100%;
  min-height: 1.5rem;
  margin: 3px 0;
  outline: none;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export interface H6Props {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const H6: React.FC<H6Props> = ({ value, setValue, func }) => {
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

export default H6;
