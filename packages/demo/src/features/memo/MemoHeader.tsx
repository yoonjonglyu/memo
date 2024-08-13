import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-shadow: 0.5px 0.5px gray, 0.5px 0.5px gray;
`;
const ToolBox = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  padding: 3px 12px;
  border: 1px solid #5f7fe9;
  border-radius: 3px;
  font-size: 0.9rem;
  font-weight: bold;
  background: #566bb0b2;
  color: #eaeaea;
  box-shadow: 0.5px 0.5px gray, 0.5px 0.5px gray;
  & img {
    width: 100%;
    height: 22px;
    margin: 0;
  }
`;
export interface MemoHeaderProps {
  handleEdit: VoidFunction;
  handleSetting: VoidFunction;
}

const MemoHeader: React.FC<MemoHeaderProps> = ({
  handleEdit,
  handleSetting,
}) => {
  return (
    <Header>
      <Title>Memo</Title>
      <ToolBox>
        <Button onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button onClick={handleSetting}>
          <FontAwesomeIcon icon={faGear} />
        </Button>
      </ToolBox>
    </Header>
  );
};

export default MemoHeader;
