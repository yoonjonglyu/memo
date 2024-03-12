import React, { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
margin: 50px;
`;
const TextArea = styled.textarea`
  height: 500px;
  background-color: blue;
`;
const ViewArea = styled.div`
  height: 500px;
  background-color: red;
`;

export interface PInputProps {}

const PInput: React.FC<PInputProps> = () => {
  const [isType, setIsType] = useState(false);
  const [value, setValue] = useState('');
  const startType = () => setIsType(true);
  const endType = () => setIsType(false);

  return (
    <Wrap onClick={startType} onBlur={endType}>
      {isType ? <TextArea value={value} /> : <ViewArea>{value}</ViewArea>}
    </Wrap>
  );
};

export default PInput;
