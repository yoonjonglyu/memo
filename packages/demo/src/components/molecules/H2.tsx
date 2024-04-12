import React from 'react';
import styled from 'styled-components';

import useType from '../../hooks/useType';

const Wrap = styled.div`
  margin: 8px;
  border: 0.5px solid gray;
`;
const H = styled.h2`
  width: 100%;
  min-height: 2rem;
  outline: none;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export interface H2Props {
  value: string;
  setValue: Function;
}

const H2: React.FC<H2Props> = ({ value, setValue }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 500,
  });
  return (
    <Wrap>
      <H contentEditable="true" onKeyUp={handleType}>
        {value}
      </H>
    </Wrap>
  );
};

export default H2;
