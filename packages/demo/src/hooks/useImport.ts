import { isNull, isString, isArray } from 'isa-util';

import MemoApi from '../api/memoApi';
import useMemo from './useMemo';

const MemoSignal = new MemoApi();
function useImport() {
  const { initMemo } = useMemo();

  const importJSON = () => {
    const reader = new FileReader();
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', '.json');

    input.onchange = e => {
      const target = e.target as HTMLInputElement;
      if (isNull(target.files)) return;
      reader.readAsText(target.files[0]);

      reader.onloadend = async () => {
        if (isString(reader.result)) {
          try {
            const data = JSON.parse(reader.result);
            if (isArray(data)) await MemoSignal.setMemoList(data);
            await initMemo();
          } catch (err) {
            console.error('Invalid JSON file', err);
          }
        }
      };
    };

    input.click();
  };
  return { importJSON };
}

export default useImport;
