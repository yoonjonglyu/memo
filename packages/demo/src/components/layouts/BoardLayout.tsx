import React from 'react';

export interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return (
    <main
      role="main"
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4 max-w-308 mx-auto"
    >
      {children}
    </main>
  );
};

export default BoardLayout;
