import React from 'react';
import { test } from 'vitest';
import { render } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Testing FormPage', () => {
  const { container } = render(
    <Modal open onClose={() => {}}>
      <>
        <h4 className="card__title">title</h4>
        <img src="" alt="card" />
        <div className="card__description">
          <p className="desciption__text" style={{ maxWidth: '400px' }}>
            description
          </p>
        </div>
        <div className="card__price">
          <p className="price__stock">stock: stock</p>
          <p className="price__price">price: price</p>
        </div>
      </>
    </Modal>
  );
  test('check Modal creating', () => {
    expect(container.querySelector('.modal'));
  });
});
