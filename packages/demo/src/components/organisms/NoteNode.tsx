import React from 'react';

import PInput from '../molecules/PInput';
import H1 from '../molecules/H1';
import H2 from '../molecules/H2';
import H3 from '../molecules/H3';
import H4 from '../molecules/H4';
import H5 from '../molecules/H5';
import H6 from '../molecules/H6';

import type { FuncProps } from '../../hooks/useType';

export interface NoteNodeProps extends HTMLDivElement {
  type: string;
  value: any;
  setValue: Function;
  func: FuncProps;
}

const NoteNode: React.FC<NoteNodeProps> = ({ type, ...props }) => {
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

export default NoteNode;
