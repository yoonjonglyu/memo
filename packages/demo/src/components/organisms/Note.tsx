import React from 'react';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import NoteNode from './NoteNode';
import InputWrap from '../molecules/InputWrap';

import type { FuncProps } from '../../hooks/useType';

export interface NoteProps {
  value: Array<NoteValueProps>;
  setValue: (cdx: number, value: NoteValueProps) => void;
  func: FuncProps;
  deleteItemHandler: (idx: number) => void;
  addItemHandler: (idx: number) => void;
  blockColor?: 'm' | 'o' | 'm2' | 'e';
}
export interface NoteValueProps {
  idx: number;
  type: string;
  value: string;
}

const Note: React.FC<NoteProps> = ({
  value,
  setValue,
  func,
  deleteItemHandler,
  addItemHandler,
  blockColor,
}) => {
  const [title, ...article] = value;

  return (
    <MemoBox blockColor={blockColor}>
      {/* Note Header: 제목 영역 */}
      <div className="mb-4 border-b-2 border-gray-100 pb-2">
        <H1
          value={title.value}
          setValue={(state: string) => {
            const next = JSON.parse(JSON.stringify(title));
            next.value = state;
            setValue(0, next);
          }}
          func={{
            Enter: () => func.Enter(1),
          }}
        />
      </div>

      {/* Note Body: 본문 리스트 */}
      <ol className="space-y-1 overflow-y-auto max-h-37.5 scrollbar-hide">
        {article.map((item, idx) => {
          return (
            <li key={`${item.idx}-${idx}`} className="flex group">
              <InputWrap
                addButtonProps={{ onClick: () => addItemHandler(idx + 2) }}
                removeButtonProps={{
                  onClick: () => deleteItemHandler(idx + 1),
                }}
              >
                <div className="w-full">
                  <NoteNode
                    type={item.type}
                    value={item.value}
                    setValue={(state: string) => {
                      const next = JSON.parse(JSON.stringify(value[idx + 1]));
                      next.value = state;
                      setValue(idx + 1, next);
                    }}
                    func={{
                      Enter: () => func.Enter(idx + 2),
                    }}
                  />
                </div>
              </InputWrap>
            </li>
          );
        })}
      </ol>
    </MemoBox>
  );
};

export default Note;
