import React from 'react';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('Testing FormPage', () => {
  test('check FormPage creating', () => {
    render(<FormPage />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Sex')).toBeInTheDocument();
    expect(screen.getByText('Avatar')).toBeInTheDocument();
    expect(screen.getByText('I consent to my personal data')).toBeInTheDocument();
  });
});
