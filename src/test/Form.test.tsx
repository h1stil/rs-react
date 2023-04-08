import React from 'react';
import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Testing Form', () => {
  test('nameValidation', () => {
    const { container } = render(<Form createCard={() => {}} />);
    const nameInput = screen.getByTestId('username-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.click(submitButton);

    expect(container.querySelector('#username-input'));
    expect(container.querySelector('#date-input'));
    expect(container.querySelector('#language-select'));
    expect(container.querySelector('#sex-male-input'));
    expect(container.querySelector('#sex-female-input'));
    expect(container.querySelector('#file-input'));
    expect(container.querySelector('#terms-input'));
    expect(container.querySelector('#terms-input'));
  });

  test('check error message when form is empty', () => {
    const { container } = render(<Form createCard={() => {}} />);
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(container.querySelector('.form__error'));
  });
});
