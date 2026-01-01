import React from 'react';

export interface LargeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LargeButton: React.FC<LargeButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`
        w-full py-4 px-2
        text-lg font-black uppercase tracking-wider
        text-white bg-memo-o
        border-b-4 border-black/20
        active:border-b-0 active:translate-y-0.5
        transition-all duration-75
        disabled:bg-gray-300 disabled:border-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default LargeButton;