import React from 'react';

import style from '../style.module.css';

export interface MemoBoxProps extends React.HTMLAttributes<HTMLElement> {}

const MemoBox: React.FC<MemoBoxProps> = (props) => {
  return (
    <div {...props} className={[style.memobox, props?.className].join(' ')} />
  );
};

export default MemoBox;
