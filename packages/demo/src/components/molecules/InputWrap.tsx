import React, { useState } from 'react';
import SquareButton, { SquareButtonProps } from './SquareButton';

export interface InputWrapProps {
  children?: React.ReactNode;
  addButtonProps?: Omit<SquareButtonProps, 'iconType'>;
  removeButtonProps?: Omit<SquareButtonProps, 'iconType'>;
}

const InputWrap: React.FC<InputWrapProps> = ({
  children,
  addButtonProps,
  removeButtonProps,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    /* group 클래스를 추가하여 호버 상태를 감지합니다. */
    <div className="group relative flex items-center w-full min-h-8">
      {/* 텍스트 입력 영역: 불필요한 border 제거 */}
      <div className="flex-1 w-full">
        {children}
      </div>

      {/* 조작 버튼 영역: 우측 끝에 절대 좌표로 배치하여 텍스트 흐름을 방해하지 않음 */}
      <div className="
        absolute right-0 flex items-center gap-1 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        bg-white/80 backdrop-blur-sm pl-2 rounded-l-md
      ">
        <SquareButton
          aria-label="menu"
          iconType="menu"
          onClick={handleMenuOpen}
          className="!bg-gray-400 hover:!bg-gray-600"
        />
        
        {isOpen && (
          <div className="flex gap-1 animate-in slide-in-from-right-2 duration-150">
            <SquareButton 
              aria-label="add" 
              iconType="add" 
              className="!bg-memo-m"
              {...addButtonProps} 
            />
            <SquareButton 
              aria-label="remove" 
              iconType="remove" 
              className="!bg-memo-e"
              {...removeButtonProps} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputWrap;