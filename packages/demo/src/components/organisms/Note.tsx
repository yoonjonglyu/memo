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
  setValue: React.Dispatch<React.SetStateAction<any>>;
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
          setValue={(state: string) =>
            setValue((prev: Array<NoteValueProps>) => {
              const next = [...prev];
              next[0].value = state;
              return next;
            })
          }
          func={func}
        />
      </Header>
      <Body>
        {article.map(item => {
          return (
            <NoteNode
              type={item.type}
              value={item.value}
              setValue={(state: string) =>
                setValue((prev: Array<NoteValueProps>) => {
                  const next = [...prev];
                  next[item.idx].value = state;
                  return next;
                })
              }
              func={func}
            />
          );
        })}
      </Body>
    </MemoBox>
  );
};

export default Note;