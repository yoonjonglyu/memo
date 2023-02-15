import React from 'react';
import styled from 'styled-components';

import MemoBox from './atoms/MemoBox';

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
    <MemoBox>
      <Text value={value} onChange={onChange} />
    </MemoBox>
  );
};

export default Memo;
