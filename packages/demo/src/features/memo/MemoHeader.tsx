import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export interface MemoHeaderProps {
  handleEdit: VoidFunction;
  handleSetting: VoidFunction;
}

const MemoHeader: React.FC<MemoHeaderProps> = ({ handleEdit, handleSetting }) => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4">
      {/* 테트리스 블록 느낌의 타이틀 */}
      <h1 className="text-2xl font-black tracking-tighter text-gray-800">
        MEMO<span className="text-memo-m">.</span>
      </h1>

      <div className="flex gap-2">
        <button 
          onClick={handleEdit} 
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-memo-m text-memo-m hover:bg-memo-m hover:text-white transition-colors rounded-tetris shadow-sm"
          aria-label="edit"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button 
          onClick={handleSetting} 
          className="w-10 h-10 flex items-center justify-center bg-white border-2 border-memo-o text-memo-o hover:bg-memo-o hover:text-white transition-colors rounded-tetris shadow-sm"
          aria-label="setting"
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
    </div>
  );
};

export default MemoHeader;