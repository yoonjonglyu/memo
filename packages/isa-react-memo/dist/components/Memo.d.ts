import React from 'react';
export interface MemoProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    textAreaProps?: React.HTMLAttributes<HTMLTextAreaElement>;
}
declare const Memo: React.FC<MemoProps>;
export default Memo;
