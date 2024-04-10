import { useState, useEffect } from 'react';

export interface UseTypeProps {
  value: string;
  setValue: Function;
  delay: number;
}
let prev: any = null;

function useType({ value, setValue, delay }: UseTypeProps) {
  const [typeValue, setTypeValue] = useState(value);

  const handleType: React.KeyboardEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
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
