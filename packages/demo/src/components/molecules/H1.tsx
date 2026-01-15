import React, { useRef, useEffect } from 'react';
import useType, { FuncProps } from '../../hooks/useType';

export interface H1Props {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const H1: React.FC<H1Props> = React.memo(({ value, setValue, func }) => {
  const domRef = useRef<HTMLHeadingElement>(null);
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 300,
    func: func,
  });

  // 최초 렌더링 시 딱 한 번만 DOM에 값을 직접 넣어줍니다.
  useEffect(() => {
    if (domRef.current && domRef.current.innerText !== value) {
      domRef.current.innerText = value;
    }
  }, []); // 의존성 배열을 비워 리렌더링 시 값이 덮어써지는 것을 방지

  return (
    <div className="mb-2">
      <h1
        ref={domRef}
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
        className="w-full min-h-[2.4rem] outline-none text-2xl font-black leading-tight text-gray-800 font-sans tracking-tight"
      >
      </h1>
    </div>
  );
}, (prev, next) => {
  // 상위에서 데이터가 변해도 이 컴포넌트 자체가 다시 그려지는 것을 최대한 방어합니다.
  return prev.value === next.value;
});

export default H1;