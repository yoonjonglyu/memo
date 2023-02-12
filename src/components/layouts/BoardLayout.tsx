import React from 'react';
import styled from 'styled-components';

const Board = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  width: 100%;
  min-height: 500px;
`;

interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return <Board role="main">{children}</Board>;
};

export default BoardLayout;
