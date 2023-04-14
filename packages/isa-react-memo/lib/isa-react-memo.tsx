import React from 'react';

export interface Tprops {
  state: boolean;
}

const Test: React.FC<Tprops> = ({ state }) => {
  return <div>test</div>;
};

export default Test;
