import React from 'react';

// 심플하면서 모던 한 느낌을 줄려면 입체감을 주는게 맞을거 같다.
export interface MemoProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Memo: React.FC<MemoProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="type Memo..."
      className="w-full h-full min-h-25 resize-none outline-none border-none text-sm leading-relaxed text-gray-700 bg-transparent scrollbar-hide"
    />
  );
};

export default Memo;
