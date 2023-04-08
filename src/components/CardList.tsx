/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';
import '../styles/_paginations.scss';

function CardList() {
  const [cards, setCards] = useState<MyState>({ isError: null, isLoaded: false, items: [] });
  const { isError, isLoaded, items } = cards;
  const [itemsPerPage, setItemsPerPage] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${itemsPerPage}`)
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
  }, []);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  if (!isLoaded) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }
  return (
    <>
      <div className="card__list">
        {Array.isArray(items)
          ? items.map((item) => (
              <div key={item.id}>
                <Card {...item} />
              </div>
            ))
          : null}
      </div>
      <div className="pages">
        <button className="pages_prev">&laquo;</button>
        <button className="pages_next">&raquo;</button>
      </div>
    </>
  );
}

export default CardList;
