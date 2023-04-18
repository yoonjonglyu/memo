import React from 'react';
import './style.css';
import { MemoProps } from './components/Memo';
import { TodoProps } from './components/Todo';
export type IsaReactMemoProps = ReactMemoProps | ReactTodoProps;
interface ReactMemoProps extends MemoProps {
    type: 'memo';
}
interface ReactTodoProps extends TodoProps {
    type: 'todo';
}
declare const IsaReactMemo: React.FC<IsaReactMemoProps>;
export default IsaReactMemo;
