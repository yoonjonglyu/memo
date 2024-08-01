import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #47429b;
  background: #a5a0f8;
  border: none;
  border-radius: 3px;
  padding: 18px 8px;
  font-size: 1.2rem;
`;

export interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LargeButton: React.FC<LargeButtonProps> = props => {
  return <Button {...props} />;
};

export default LargeButton;
