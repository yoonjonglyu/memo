import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import NoteNode from './NoteNode';

import type { FuncProps } from '../../hooks/useType';

const Header = styled.div``;
const Body = styled.div``;

export interface NoteProps {
  value: Array<NoteValueProps>;
  setValue: (cdx: number, value: NoteValueProps) => void;
  func: FuncProps;
}
export interface NoteValueProps {
  idx: number;
  type: string;
  value: string;
}

const Note: React.FC<NoteProps> = ({ value, setValue, func }) => {
  const [title, ...article] = value;

  return (
    <MemoBox>
      <Header>
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
      </Header>
      <Body>
        {article.map((item, idx) => {
          return (
            <NoteNode
              key={`${item.idx}-${idx}`}
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
          );
        })}
      </Body>
    </MemoBox>
  );
};

export default Note;
