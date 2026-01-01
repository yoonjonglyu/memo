import React from 'react';
import useType, { FuncProps } from '../../hooks/useType';

export interface PInputProps {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const PInput: React.FC<PInputProps> = ({ value, setValue, func }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 300, // 입력 체감을 위해 딜레이를 약간 조정
    func: func,
  });

  return (
    <div className="my-0.5 border-l-2 border-gray-100 px-2 transition-colors focus-within:border-memo-m">
      <div
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
        className="w-full min-h-6 outline-none text-base leading-relaxed text-gray-700 font-sans break-all"
      >
        {value}
      </div>
    </div>
  );
};

export default PInput;
