import React, { useRef, useEffect } from 'react';
import useType, { FuncProps } from '../../hooks/useType';

export interface PInputProps {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const PInput: React.FC<PInputProps> = React.memo(({ value, setValue, func }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 300,
    func: func,
  });

  // 초기값 주입
  useEffect(() => {
    if (domRef.current && domRef.current.innerText !== value) {
      domRef.current.innerText = value;
    }
  }, []);

  return (
    <div className="my-0.5 border-l-2 border-gray-100 px-2 transition-colors focus-within:border-memo-m">
      <div
        ref={domRef}
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
        className="w-full min-h-6 outline-none text-base leading-relaxed text-gray-700 font-sans break-all"
      >
      </div>
    </div>
  );
}, (prev, next) => {
  return prev.value === next.value;
});

export default PInput;