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
  setValue: Function;
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
            const next = JSON.parse(JSON.stringify(value));
            next[0].value = state;
            setValue(next);
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
              key={item.idx}
              type={item.type}
              value={item.value}
              setValue={(state: string) => {
                const next = JSON.parse(JSON.stringify(value));
                next[idx].value = state;
                setValue(next);
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
