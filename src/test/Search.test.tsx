import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it } from 'vitest';

import Search from '../components/Search';
import { Provider } from 'react-redux';
import { store } from '../app/store';

describe('test input type search', () => {
  it('Render search placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('Change search value', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput: HTMLInputElement = screen.getByTestId('search-input');
    await userEvent.type(searchInput, 'phone');
    expect(searchInput.value).toBe('phone');
  });
});
