import React from 'react';
import styled from 'styled-components';

import useType, { FuncProps } from '../../hooks/useType';

const Wrap = styled.div`
  margin: 2px;
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
  func: FuncProps;
}
let prev: any = null;

const PInput: React.FC<PInputProps> = ({ value, setValue, func }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 500,
    func: func,
  });

  return (
    <Wrap>
      <P
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
      >
        {value}
      </P>
    </Wrap>
  );
};

export default PInput;
