import React from 'react';

export interface MemoBoxProps extends React.HTMLAttributes<HTMLElement> {}

const MemoBox: React.FC<MemoBoxProps> = (props) => {
  return <div {...props} className={`memobox ${props.className}`} />;
};

export default MemoBox;
