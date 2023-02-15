import React from 'react';

import Memo from '../../components/organisms/Memo';
import Todo from '../../components/organisms/Todo';

export interface MemoItemProps {
  index: number;
  type: 'memo' | 'todo';
  props: string | Array<{ isAvail: boolean; todo: string }>;
  memoHandler: React.Dispatch<React.SetStateAction<Array<any>>>;
}

const MemoItem: React.FC<MemoItemProps> = prop => {
  const { index, type, props, memoHandler } = prop;

  const handleMemo = (value: string) => {
    memoHandler(prev => {
      const next = Array.from(prev);
      next[index].props = value;
      return next;
    });
  };
  const handleAddTodo = (value: string) => {
    memoHandler(prev => {
      const next = Array.from(prev);
      if (typeof next[index].props !== 'string') {
        next[index].props.push({
          isAvail: false,
          todo: value,
        });
      }
      return next;
    });
  };
  const handleDeleteTodo = (idx: number) => {
    memoHandler(prev => {
      const next = Array.from(prev);
      if (typeof next[index].props !== 'string') {
        next[index].props = [
          ...next[index].props.slice(0, idx),
          ...next[index].props.slice(idx + 1, next[index].props.length),
        ];
      }
      return next;
    });
  };
  const handleCheckTodo = (idx: number) => {
    memoHandler(prev => {
      const next = Array.from(prev);
      if (typeof next[index].props !== 'string') {
        next[index].props[idx].isAvail = !next[index].props[idx].isAvail;
      }
      return next;
    });
  };

  return type === 'memo' ? (
    <Memo value={props as string} onChange={e => handleMemo(e.target.value)} />
  ) : (
    <Todo
      todoItem={props as Array<{ isAvail: boolean; todo: string }>}
      addItemHandler={todo => handleAddTodo(todo)}
      checkItemHandler={idx => handleCheckTodo(idx)}
      deleteItemHandler={idx => handleDeleteTodo(idx)}
    />
  );
};

export default MemoItem;
