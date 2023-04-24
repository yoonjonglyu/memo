import React from 'react';

import MemoBox from './MemoBox';

import style from '../style.module.css';

export interface MemoProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  textAreaProps?: React.HTMLAttributes<HTMLTextAreaElement>;
}

const Memo: React.FC<MemoProps> = ({
  value,
  onChange,
  containerProps,
  textAreaProps,
}) => {
  return (
    <MemoBox>
      <textarea
        {...textAreaProps}
        className={`${style.textarea} ${textAreaProps?.className}`}
        value={value}
        onChange={onChange}
      />
    </MemoBox>
  );
};

export default Memo;
