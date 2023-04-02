/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';

function CardList() {
  const [cards, setCards] = useState<MyState>({ isError: null, isLoaded: false, items: [] });
  const { isError, isLoaded, items } = cards;

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          setCards({ isLoaded: true, items: result.products, isError });
        },
        (error) => {
          setCards({
            isLoaded: true,
            items,
            isError: error,
          });
        }
      );
  });

  if (isError) {
    return <div>Error: {isError.message}</div>;
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
}

export default CardList;
