import { useState, useEffect } from 'react';

export interface UseTypeProps {
  value: string;
  setValue: Function;
  delay: number;
  func?: { Enter: Function };
}
let prev: any = null;

function useType({ value, setValue, delay, func }: UseTypeProps) {
  const [typeValue, setTypeValue] = useState(value);

  const handleType: React.KeyboardEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (func?.Enter && e.key === 'Enter') {
      e.preventDefault();
      func['Enter'](e);
      return;
    }

    if (prev !== null) clearTimeout(prev);
    prev = setTimeout(() => setTypeValue(target.textContent || ''), delay);
  };

  useEffect(() => {
    if (value !== typeValue) setValue(typeValue);
  }, [value, typeValue]);

  return {
    handleType,
  };
}

export default useType;
