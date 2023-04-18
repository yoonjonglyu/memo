import React from 'react';
export interface TodoProps {
    todoItem: Array<{
        isAvail: boolean;
        todo: string;
    }>;
    addItemHandler: (todo: string) => void;
    checkItemHandler: (idx: number) => void;
    deleteItemHandler: (idx: number) => void;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    inputProps?: React.HTMLAttributes<HTMLInputElement>;
    listProps?: React.HTMLAttributes<HTMLUListElement>;
}
declare const Todo: React.FC<TodoProps>;
export default Todo;
