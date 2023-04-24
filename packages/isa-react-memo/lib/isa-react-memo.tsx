import React from 'react';

import Memo, { MemoProps } from './components/Memo';
import Todo, { TodoProps } from './components/Todo';

export type IsaReactMemoProps = ReactMemoProps | ReactTodoProps;
interface ReactMemoProps extends MemoProps {
  type: 'memo';
}
interface ReactTodoProps extends TodoProps {
  type: 'todo';
}

const IsaReactMemo: React.FC<IsaReactMemoProps> = ({ type, ...props }) => {
  const ReturnComponent = (type === 'memo' ? Memo : Todo) as React.FC<
    MemoProps | TodoProps
  >;
  return <ReturnComponent {...props} />;
};

export default IsaReactMemo;
