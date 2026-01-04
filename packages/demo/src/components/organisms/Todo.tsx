import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MemoBox from '../atoms/MemoBox';
import SquareButton from '../molecules/SquareButton';

export interface TodoProps {
  todoItem: Array<TodoValueProps>;
  addItemHandler: (todo: string) => void;
  checkItemHandler: (idx: number) => void;
  deleteItemHandler: (idx: number) => void;
  blockColor?: 'm' | 'o' | 'm2' | 'e';
}
export interface TodoValueProps {
  isAvail: boolean;
  todo: string;
}

const Todo: React.FC<TodoProps> = props => {
  const {
    todoItem,
    addItemHandler,
    checkItemHandler,
    deleteItemHandler,
    blockColor,
  } = props;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    handleAddTodo(input);
  };
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
    <MemoBox blockColor={blockColor}>
      <div className="flex flex-col gap-3">
        {/* 입력 영역 */}
        <form className="flex gap-1" onSubmit={handleSubmit}>
          <input
            onKeyUp={handleInsert}
            className="flex-1 px-2 py-1 text-sm border-2 border-gray-200 focus:border-memo-m outline-none transition-colors"
          />
          <button
            className="bg-gray-800 text-white px-3 py-1 text-xs"
            type="submit"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>

        {/* 리스트 영역 */}
        <ul className="space-y-1 overflow-y-auto max-h-37.5 scrollbar-hide">
          {todoItem?.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 p-2 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                checked={item.isAvail}
                onChange={() => checkItemHandler(idx)}
                className="accent-memo-m w-4 h-4"
              />
              <span
                className={`flex-1 text-xs ${
                  item.isAvail ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
              >
                {item.todo}
              </span>
              <SquareButton
                aria-label="remove"
                iconType="remove"
                onClick={() => deleteItemHandler(idx)}
              />
            </li>
          ))}
        </ul>
      </div>
    </MemoBox>
  );
};

export default Todo;
