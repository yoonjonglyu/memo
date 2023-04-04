import React from 'react';
import styled from 'styled-components';

const Box = styled.section`
  max-width: 240px;
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 4px;
  border: 1px solid;
  box-shadow: 1px 1px gray;
  word-break: break-all;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 920px) {
    max-width: unset;
  }
`;
export interface MemoBoxProps extends React.HTMLAttributes<HTMLElement> {}

const MemoBox: React.FC<MemoBoxProps> = props => {
  return <Box {...props} />;
};

export default MemoBox;
