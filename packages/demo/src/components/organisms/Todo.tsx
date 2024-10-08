import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MemoBox from '../atoms/MemoBox';
import SquareButton from '../molecules/SquareButton';

const TodoInput = styled.input`
  float: left;
  width: calc(100% - 32px);
  height: 28px;
  padding: 1px 2px;
  margin: 0 auto;
  font-size: 1rem;
  border: 0.5px solid #00000053;
  box-sizing: border-box;
`;
const InputButton = styled.button`
  clear: both;
  width: 30px;
  height: 28px;
  padding: 0;
  margin: 0 auto;
  margin-left: 2px;
  font-size: 13px;
  color: #222222d3;
  vertical-align: top;
  border: 0.5px solid #00000053;
`;
const TodoList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 3px;
  margin: 3px auto;
  padding: 0;
  list-style: none;
  overflow: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  & li {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 3px;
    font-size: 0.8rem;
    background: #80808037;
    border-radius: 3px;
  }
  & li button {
    flex-shrink: 0;
  }
`;
const CheckedTodo = styled.input``;

export interface TodoProps {
  todoItem: Array<TodoValueProps>;
  addItemHandler: (todo: string) => void;
  checkItemHandler: (idx: number) => void;
  deleteItemHandler: (idx: number) => void;
}
export interface TodoValueProps {
  isAvail: boolean;
  todo: string;
}

const Todo: React.FC<TodoProps> = props => {
  const { todoItem, addItemHandler, checkItemHandler, deleteItemHandler } =
    props;
  //상위 props로 state를 핸들링하기에 리렌더링시 동일한 함수가 계속 재생성됨
  // 보통 useCallback 훅을 사용해서 최적화한다.
  const handleInsert: React.KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      handleAddTodo(input);
    }
  };
  const handleAddTodo = (input: HTMLInputElement) => {
    if (input.value.trim().length > 0) {
      addItemHandler(input.value);
      input.value = '';
    }
  };

  return (
    <MemoBox>
      <TodoInput onKeyUp={handleInsert} aria-label="todoinput" />
      <InputButton
        type="button"
        onClick={e => {
          const input = e.target as HTMLButtonElement;
          handleAddTodo(input.previousElementSibling as HTMLInputElement);
        }}
        aria-label="add"
      >
        <FontAwesomeIcon icon={faPlus} />
      </InputButton>
      <TodoList>
        {todoItem?.map((item, idx) => {
          return (
            <li key={idx}>
              <CheckedTodo
                aria-label="check todo"
                type="checkbox"
                checked={item.isAvail}
                onClick={() => checkItemHandler(idx)}
                readOnly
              />
              {item.todo}
              <SquareButton
                aria-label="remove"
                iconType="remove"
                onClick={() => deleteItemHandler(idx)}
              />
            </li>
          );
        })}
      </TodoList>
    </MemoBox>
  );
};

export default Todo;
