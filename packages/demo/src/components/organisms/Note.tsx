import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import H2 from '../molecules/H2';
import H3 from '../molecules/H3';
import H4 from '../molecules/H4';
import H5 from '../molecules/H5';
import H6 from '../molecules/H6';
import PInput from '../molecules/PInput';

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
            <NoteLine
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

const NoteLine: React.FC<any> = ({ type, ...props }) => {
  switch (type) {
    case 'h1':
      return <H1 {...props} />;
    case 'h2':
      return <H2 {...props} />;
    case 'h3':
      return <H3 {...props} />;
    case 'h4':
      return <H4 {...props} />;
    case 'h5':
      return <H5 {...props} />;
    case 'h6':
      return <H6 {...props} />;
    default:
      return <PInput {...props} />;
  }
};
