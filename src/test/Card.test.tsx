import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Testing CardList', () => {
  const card = render(
    <Card
      id={0}
      title=""
      description=""
      price={0}
      discountPercentage={0}
      rating={0}
      stock={0}
      brand=""
      category=""
      thumbnail=""
      images={['']}
    />
  );

  it('check Card', () => {
    expect(document.querySelector('.card')).toBeInTheDocument();

    const img = card.container.querySelector('img');
    expect(img).toBeInTheDocument();
  });
});
