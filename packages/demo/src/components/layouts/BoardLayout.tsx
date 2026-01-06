import React from 'react';

export interface BoardLayoutProps {
  children: React.ReactNode;
}

const BoardLayout: React.FC<BoardLayoutProps> = ({ children }) => {
  return (
    <main
      role="main"
      className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 w-full pb-20"
    >
      {children}
    </main>
  );
};

export default BoardLayout;
