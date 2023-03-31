/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';

const CardList = () => {
  const [cards, setCards] = useState<MyState>({ error: null, isLoaded: false, items: [] });

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          setCards({ isLoaded: true, items: result.products, error });
        },
        (error) => {
          setCards({
            isLoaded: true,
            items,
            error,
          });
        }
      );
  });

  const { error, isLoaded, items } = cards;
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }
  return (
    <div className="card__list">
      {Array.isArray(items)
        ? items.map((item) => (
            <div key={item.id}>
              <Card {...item} />
            </div>
          ))
        : null}
    </div>
  );
};

export default CardList;
