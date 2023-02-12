import React from 'react';
import styled from 'styled-components';

const Box = styled.section`
  max-width: 180px;
  width: 100%;
  min-height: 150px;
  max-height: 240px;
  margin: 0;
  padding: 8px;
  border: 1px solid;
  box-shadow: 1px 1px gray;
  word-break: break-all;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 920px) {
    max-width: unset
  }
`;
const Text = styled.textarea`
  min-height: 150px;
  max-height: 240px;
  resize: none;
  outline: none;
  border: none;
  word-break: break-all;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// 심플하면서 모던 한 느낌을 줄려면 입체감을 주는게 맞을거 같다.
export interface MemoProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Memo: React.FC<MemoProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Text value={value} onChange={onChange} />
    </Box>
  );
};

export default Memo;
