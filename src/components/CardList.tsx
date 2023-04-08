/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';
import '../styles/_paginations.scss';

function CardList() {
  const [cards, setCards] = useState<MyState>({ isError: null, isLoaded: false, items: [] });
  const { isError, isLoaded, items } = cards;
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  const TOTAL_ITEMS = 100;
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * ITEMS_PER_PAGE}`)
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
    setCards({ isLoaded: false, isError, items });
  }, [page]);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  if (!isLoaded) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  console.log(page);
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
        {page > 1 ? (
          <button
            className="pages_prev "
            onClick={() => {
              setPage(page - 1);
              setCards({ isLoaded: true, isError, items });
            }}
          >
            &laquo;
          </button>
        ) : (
          <button className="disabled" disabled>
            &laquo;
          </button>
        )}
        {page < TOTAL_ITEMS / ITEMS_PER_PAGE ? (
          <button
            className="pages_next"
            onClick={() => {
              setPage(page + 1);
              setCards({ isLoaded: true, isError, items });
            }}
          >
            &raquo;
          </button>
        ) : (
          <button className="disabled" disabled>
            &raquo;
          </button>
        )}
      </div>
    </>
  );
}

export default CardList;
