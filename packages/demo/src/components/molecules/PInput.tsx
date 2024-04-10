import React from 'react';
import styled from 'styled-components';

import useType from '../../hooks/useType';

const Wrap = styled.div`
  margin: 8px;
  border: 0.5px solid gray;
`;
const P = styled.div`
  width: 100%;
  min-height: 1.5rem;
  outline: none;
  font-size: 1rem;
  line-height: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
`;
export interface PInputProps {
  value: string;
  setValue: Function;
}
let prev: any = null;

const PInput: React.FC<PInputProps> = ({ value, setValue }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 500,
  });

  return (
    <Wrap>
      <P contentEditable="true" onKeyUp={handleType}>
        {value}
      </P>
    </Wrap>
  );
};

export default PInput;
