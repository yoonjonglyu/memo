import React from 'react';

import MemoBox from './MemoBox';

export interface MemoProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Memo: React.FC<MemoProps> = ({ value, onChange }) => {
  return (
    <MemoBox>
      <textarea className='textarea' value={value} onChange={onChange} />
    </MemoBox>
  );
};

export default Memo;
