import React from 'react';
import styled from 'styled-components';

import Memo from '../../components/organisms/Memo';
import Todo from '../../components/organisms/Todo';

import useMemo from '../../hooks/useMemo';

const ItemBox = styled.div`
  max-width: 240px;
  width: 100%;
  @media screen and (max-width: 920px) {
    max-width: unset;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 6px 0;
  color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
  background: #e94f4f;
`;

export interface MemoItemProps {
  index: number;
  type: 'memo' | 'todo';
  props: string | Array<{ isAvail: boolean; todo: string }>; // 보통 이런 예약어는 커스텀해서 안쓰는게 좋다.
  isEdit: boolean;
}

// props가 너무 길어지면 컴포넌트 내부에서 구조분해 할당하는게 보통 보기 좋다.
const MemoItem: React.FC<MemoItemProps> = ({ index, type, props, isEdit }) => {
  const {
    handleMemo,
    handleDeleteMemo,
    handleAddTodo,
    handleCheckTodo,
    handleDeleteTodo,
  } = useMemo();

  return (
    <ItemBox>
      {type === 'memo' ? (
        <Memo
          value={props as string}
          onChange={e => handleMemo(index, e.target.value)}
        />
      ) : (
        <Todo
          todoItem={props as Array<{ isAvail: boolean; todo: string }>}
          addItemHandler={todo => handleAddTodo(index, todo)}
          checkItemHandler={idx => handleCheckTodo(index, idx)}
          deleteItemHandler={idx => handleDeleteTodo(index, idx)}
        />
      )}
      {isEdit ? (
        <Button onClick={() => handleDeleteMemo(index)}>삭제</Button>
      ) : null}
    </ItemBox>
  );
};

export default MemoItem;
