import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../components/Form';
import { store } from '../app/store';
import { Provider } from 'react-redux';

describe('Form page', () => {
  it('check Form creating', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
