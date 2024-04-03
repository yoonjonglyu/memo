import React from 'react';
import styled from 'styled-components';

import MemoBox from '../atoms/MemoBox';
import PInput from '../molecules/PInput';

export interface NoteProps {}
const Note: React.FC<NoteProps> = () => {
  return (
    <MemoBox>
      <PInput />
      <PInput />
      <PInput />
    </MemoBox>
  );
};

export default Note;
