import React from 'react';
import styled from 'styled-components';

const Board = styled.main`
  display: flex;
  width: 100%;
  min-height: 500px;
  gap: 8px;
`;

interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return <Board role="main">{children}</Board>;
};

export default BoardLayout;
