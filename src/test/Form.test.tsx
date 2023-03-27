import React from 'react';
import { test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from '../components/Form';

describe('Testing Form', () => {
  test('nameValidation', () => {
    render(<Form createCard={() => {}} />);
    const nameInput = screen.getByTestId('username-input');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Name is required (min 3 characters)')).toBeInTheDocument();
  });

  test('check error message when form is empty', () => {
    render(<Form createCard={() => {}} />);
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(screen.getByText('Name is required (min 3 characters)')).toBeInTheDocument();
    expect(screen.getByText('Enter date')).toBeInTheDocument();
    expect(screen.getByText('Choose one language')).toBeInTheDocument();
    expect(screen.getByText('Enter your sex')).toBeInTheDocument();
    expect(screen.getByText('Confirm personal data')).toBeInTheDocument();
  });
});
