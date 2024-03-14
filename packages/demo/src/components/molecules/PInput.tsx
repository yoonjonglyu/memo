import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 8px;
  border: 0.5px solid gray;
`;
const P = styled.div`
  width: 100%;
  min-height: 80px;
  outline: none;
`;
export interface PInputProps {
  value?: string;
  setValue?: Function;
}
let prev: any = null;

const PInput: React.FC<PInputProps> = ({ value, setValue }) => {
  const [pValue, setPValue] = useState(value || '');
  const handleType: React.KeyboardEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (prev !== null) clearTimeout(prev);
    prev = setTimeout(() => setPValue(target.textContent || ''), 500);
  };

  useEffect(() => {
    if (setValue) setValue(pValue);
  }, [pValue]);

  return (
    <Wrap>
      <P contentEditable="true" onKeyUp={handleType}>
        {pValue}
      </P>
    </Wrap>
  );
};

export default PInput;
