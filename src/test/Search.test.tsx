import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

describe('Testing SearchInput', () => {
  it('check Search creating', () => {
    localStorage.setItem('search', 'text');
    const search = render(<Search />);
    expect(search).toBeTruthy();

    const input = search.container.querySelector('#search-input') as HTMLInputElement | null;
    expect(input).toBeTruthy();
    expect(input).toHaveValue('text');

    if (input) {
      input.textContent = 'change text';
      expect(input.textContent).toBe('change text');

      expect(input.type).toBe('text');
    }
  });
  it('change input value', async () => {
    localStorage.setItem('search', '');

    render(<Search />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Search something');
    expect(input).toHaveValue('Search something');
  });
});
