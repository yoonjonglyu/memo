import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';

type ButtonType = 'add' | 'remove' | 'menu';

export interface SquareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType: ButtonType;
}

const handleIcon = (type: ButtonType) => {
  switch (type) {
    case 'add': return faPlus;
    case 'remove': return faMinus;
    case 'menu': return faBars;
    default: return faBars;
  }
};

const SquareButton: React.FC<SquareButtonProps> = ({ iconType, className, ...props }) => {
  return (
    <button
      {...props}
      className={`
        w-6 h-6 flex items-center justify-center
        bg-gray-800 text-white text-[10px]
        rounded-sm hover:bg-black active:scale-90
        transition-all shrink-0
        ${className}
      `}
    >
      <FontAwesomeIcon icon={handleIcon(iconType)} />
    </button>
  );
};

export default SquareButton;