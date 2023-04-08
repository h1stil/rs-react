import React from 'react';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardList from '../components/CardList';
import mock from '../utils/mock';

mock();

describe('Testing HomePage', () => {
  const { container } = render(<CardList />);
  test('check Modal creating', () => {
    expect(container.querySelector('.card__list'));
  });
  test('check Pagination creating', () => {
    expect(container.querySelector('.pages'));
  });
});
