import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import NoteNode from './NoteNode';

import type { FuncProps } from '../../hooks/useType';

const Header = styled.div``;
const Body = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  & li {
    display: flex;
  }
  & li div {
    width: 100%;
    margin-right: 2px;
  }
`;
const DelectBtn = styled.button`
  height: 24px;
  padding: 0;
  margin: auto;
  margin-right: 0;
  background: none;
  border: none;
  border-radius: 2px;
  font-size: 1.5rem;
`;

export interface NoteProps {
  value: Array<NoteValueProps>;
  setValue: (cdx: number, value: NoteValueProps) => void;
  func: FuncProps;
  deleteItemHandler: (idx: number) => void;
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
              <DelectBtn onClick={() => deleteItemHandler(idx + 1)}>
                <FontAwesomeIcon icon={faSquareMinus} />
              </DelectBtn>
            </li>
          );
        })}
      </Body>
    </MemoBox>
  );
};

export default Note;
