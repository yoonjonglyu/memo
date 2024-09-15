import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import NoteNode from './NoteNode';
import InputWrap from '../molecules/InputWrap';

import type { FuncProps } from '../../hooks/useType';

const Header = styled.div``;
const Body = styled.ol`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  & li {
    display: flex;
  }
  & li div {
    width: 100%;
  }
`;

export interface NoteProps {
  value: Array<NoteValueProps>;
  setValue: (cdx: number, value: NoteValueProps) => void;
  func: FuncProps;
  deleteItemHandler: (idx: number) => void;
  addItemHandler: (idx: number) => void;
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
}) => {
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
            <li>
              <InputWrap
                addButtonProps={{ onClick: () => addItemHandler(idx + 1) }}
                removeButtonProps={{
                  onClick: () => deleteItemHandler(idx + 1),
                }}
              >
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
              </InputWrap>
            </li>
          );
        })}
      </Body>
    </MemoBox>
  );
};

export default Note;
