import React from 'react';
import styled from 'styled-components';

const Box = styled.section`
  max-width: 180px;
  width: 100%;
  min-height: 150px;
  max-height: 240px;
  margin: 0;
  padding: 4px;
  border: 1px solid;
  box-shadow: 1px 1px gray;
  word-break: break-all;
  overflow: hidden;
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
