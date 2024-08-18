import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
  width: 60px;
  height: 60px;
  font-size: 2rem;
  color: #8686fa;
  border: none;
  border-radius: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 2px 1px, rgb(0 0 0 / 30%) 0px 4px 10px;
  background: #d0d0ee;
`;

export interface FloatBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  }

const FloatBtn: React.FC<FloatBtnProps> = props => {
  return <BtnContainer {...props}>+</BtnContainer>;
};

export default FloatBtn;
