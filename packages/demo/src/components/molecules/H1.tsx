import React from 'react';
import useType, { FuncProps } from '../../hooks/useType';

export interface H1Props {
  value: string;
  setValue: Function;
  func: FuncProps;
}

const H1: React.FC<H1Props> = ({ value, setValue, func }) => {
  const { handleType } = useType({
    value: value,
    setValue: setValue,
    delay: 300,
    func: func,
  });

  return (
    <div className="mb-2">
      <h1
        contentEditable="true"
        onKeyDown={handleType}
        suppressContentEditableWarning={true}
        className="w-full min-h-[2.4rem] outline-none text-2xl font-black leading-tight text-gray-800 font-sans tracking-tight"
      >
        {value}
      </h1>
    </div>
  );
};

export default H1;