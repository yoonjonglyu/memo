import React from 'react';

import MemoBox from './MemoBox';

export interface TodoProps {
  todoItem: Array<{ isAvail: boolean; todo: string }>;
  addItemHandler: (todo: string) => void;
  checkItemHandler: (idx: number) => void;
  deleteItemHandler: (idx: number) => void;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  listProps?: React.HTMLAttributes<HTMLUListElement>;
}

const Todo: React.FC<TodoProps> = (props) => {
  const {
    todoItem,
    addItemHandler,
    checkItemHandler,
    deleteItemHandler,
    containerProps,
    inputProps,
    listProps,
  } = props;

  const handleInsert: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
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
    <MemoBox {...containerProps}>
      <input
        {...inputProps}
        className={`todoinput ${inputProps?.className}`}
        onKeyUp={handleInsert}
      />

      <button
        className='todo-inputButton'
        type='button'
        onClick={(e) => {
          const input = e.target as HTMLButtonElement;
          handleAddTodo(input.previousElementSibling as HTMLInputElement);
        }}>
        ↵
      </button>
      <ul {...listProps} className={`todolist ${listProps?.className}`}>
        {todoItem?.map((item, idx) => {
          return (
            <li key={idx}>
              <input
                type='checkbox'
                checked={item.isAvail}
                onClick={() => checkItemHandler(idx)}
                readOnly
              />
              {item.todo}
              <button
                className='todo-delectbutton'
                onClick={() => deleteItemHandler(idx)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </MemoBox>
  );
};

export default Todo;
