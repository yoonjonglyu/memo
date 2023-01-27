import React from 'react';
import { render, screen } from '@testing-library/react';

describe('tt', () => {
  const a: string = 'a';
  test('aa', () => {
    render(<h1>tt</h1>);
    expect(screen.getByText('tt')).toBeInTheDocument();
    expect(a).toBe('a');
  });
});
