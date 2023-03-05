import React from 'react';
import styled from 'styled-components';

const Board = styled.main`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  max-width: 1232px;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 88px;
  margin: 0 auto;
  border: 1px solid #9c9b9b4f;
  border-top: none;
  border-bottom: none;
`;

interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return <Board role="main">{children}</Board>;
};

export default BoardLayout;
