import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';
import H1 from '../molecules/H1';
import PInput from '../molecules/PInput';

const Header = styled.div``;
const Body = styled.div``;

export interface NoteProps {}
const Note: React.FC<NoteProps> = () => {
  return (
    <MemoBox>
      <Header>
        <H1 value="" setValue={(state: any) => console.log(state)} />
      </Header>
      <Body>
        <PInput value="" setValue={(state: any) => console.log(state)} />
      </Body>
    </MemoBox>
  );
};

export default Note;
