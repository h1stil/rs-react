import React from 'react';
import { test } from 'vitest';
import { render } from '@testing-library/react';
import FormCard from '../components/FormCard';

describe('Testing FormPage', () => {
  const { container } = render(
    <FormCard
      name="test name"
      birthday="01-01-2000"
      language="English"
      terms
      sex="male"
      file="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
    />
  );
  test('check FormPage creating', () => {
    expect(container.querySelector('.form__item'));
  });
});
