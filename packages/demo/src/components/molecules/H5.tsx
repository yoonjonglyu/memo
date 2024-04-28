import React from 'react';
import styled from 'styled-components';

import useType, { FuncProps } from '../../hooks/useType';

const Wrap = styled.div`
  margin: 8px;
  border: 0.5px solid gray;
`;
const H = styled.h5`
  width: 100%;
  min-height: 1.5rem;
  margin: 3px 0;
  outline: none;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export interface H5Props {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const H5: React.FC<H5Props> = ({ value, setValue, func }) => {
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

export default H5;
