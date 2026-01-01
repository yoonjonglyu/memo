import React from 'react';

export interface FloatBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const FloatBtn: React.FC<FloatBtnProps> = props => {
  const { className, ...iprops } = props;
  return (
    <button
      className={`fixed bottom-6 right-6 w-14 h-14 bg-memo-o text-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] flex items-center justify-center text-2xl active:translate-x-0.5 active:translate-y- active:shadow-none transition-all ${
        className || ''
      }`}
      {...iprops}
    >
      +
    </button>
  );
};

export default FloatBtn;
