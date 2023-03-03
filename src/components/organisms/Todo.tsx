import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';

const TodoInput = styled.input`
  width: calc(100% - 8px);
  margin: 0 auto;
`;
const TodoList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & li {
    display: flex;
    margin: 0;
  }
`;
const CheckedTodo = styled.input``;
const DelectBtn = styled.button`
  margin-left: auto;
  background: none;
  border: 0.5px solid gray;
  border-radius: 4px;
`;

export interface TodoProps {
  todoItem: Array<{ isAvail: boolean; todo: string }>;
  addItemHandler: (todo: string) => void;
  checkItemHandler: (idx: number) => void;
  deleteItemHandler: (idx: number) => void;
}

const Todo: React.FC<TodoProps> = props => {
  const { todoItem, addItemHandler, checkItemHandler, deleteItemHandler } =
    props;
  //상위 props로 state를 핸들링하기에 리렌더링시 동일한 함수가 계속 재생성됨
  // 보통 useCallback 훅을 사용해서 최적화한다.
  const handleInsert: React.KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      if(input.value.trim().length > 0){
        addItemHandler(input.value);
        input.value = '';
      }
    }
  };

  return (
    <MemoBox>
      <TodoInput onKeyUp={handleInsert} />
      <TodoList>
        {todoItem?.map((item, idx) => {
          return (
            <li key={idx}>
              <CheckedTodo
                type="checkbox"
                checked={item.isAvail}
                onClick={() => checkItemHandler(idx)}
                readOnly
              />
              {item.todo}
              <DelectBtn onClick={() => deleteItemHandler(idx)}>X</DelectBtn>
            </li>
          );
        })}
      </TodoList>
    </MemoBox>
  );
};

export default Todo;
