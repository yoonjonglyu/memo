import React from 'react';

import Memo from '../../components/organisms/Memo';
import Todo from '../../components/organisms/Todo';

import useMemo from '../../hooks/useMemo';

export interface MemoItemProps {
  index: number;
  type: 'memo' | 'todo';
  props: string | Array<{ isAvail: boolean; todo: string }>;
}

const MemoItem: React.FC<MemoItemProps> = ({ index, type, props }) => {
  const { handleMemo, handleAddTodo, handleCheckTodo, handleDeleteTodo } =
    useMemo();

  return type === 'memo' ? (
    <Memo value={props as string} onChange={e => handleMemo(index, e.target.value)} />
  ) : (
    <Todo
      todoItem={props as Array<{ isAvail: boolean; todo: string }>}
      addItemHandler={todo => handleAddTodo(index, todo)}
      checkItemHandler={idx => handleCheckTodo(index, idx)}
      deleteItemHandler={idx => handleDeleteTodo(index, idx)}
    />
  );
};

export default MemoItem;
