import React from 'react';

interface SortSwitchProps {
  sortType: 'latest' | 'oldest';
  onToggle: () => void;
}

const SortSwitch: React.FC<SortSwitchProps> = ({ sortType, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="group flex items-center gap-3 bg-white border-2 border-gray-200 px-4 py-1.5 rounded-full hover:border-memo-o transition-all active:scale-95 shadow-sm"
    >
      {/* 텍스트가 sortType에 따라 영문으로 변경됨 */}
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-memo-o">
        {sortType === 'latest' ? 'Newest First' : 'Oldest First'}
      </span>

      {/* 스위치 아이콘 아이콘 애니메이션 */}
      <div className="relative w-8 h-4 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-300 ${
            sortType === 'latest' ? 'left-0 bg-memo-m' : 'left-1/2 bg-memo-e'
          }`}
        />
      </div>
    </button>
  );
};

export default SortSwitch;
