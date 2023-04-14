/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';

import { IFetch, MyState } from 'utils/types';
import { RootState } from 'app/store';
import Card from './Card';
import '../styles/_paginations.scss';
import { useAppSelector } from '../app/hooks';

function CardList() {
  const [cards, setCards] = useState<MyState>({ isError: null, isLoaded: false, items: [] });
  const { isError, isLoaded, items } = cards;
  const [page, setPage] = useState(1);
  const search = useAppSelector((state: RootState) => state.search.search);
  const [searchInput, setSearchInput] = useState(search);

  const ITEMS_PER_PAGE = 10;
  const TOTAL_ITEMS = 100;

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  useEffect(() => {
    if (searchInput) {
      fetch(`https://dummyjson.com/products/search?q=${searchInput}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setCards({ isLoaded: true, items: (result as IFetch).products, isError });
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
    } else {
      fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * ITEMS_PER_PAGE}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setCards({ isLoaded: true, items: (result as IFetch).products, isError });
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
    }
  }, [searchInput, page]);

  if (isError) {
    return <div>Error: {isError.message}</div>;
  }
  if (!isLoaded) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <>
      <div className="card__list">
        {items.length ? (
          Array.isArray(items) ? (
            items.map((item) => (
              <div key={item.id}>
                <Card {...item} />
              </div>
            ))
          ) : null
        ) : (
          <p>Not found</p>
        )}
      </div>
      {items.length >= ITEMS_PER_PAGE ? (
        <div className="pages">
          {page > 1 ? (
            <button
              type="button"
              className="pages_prev "
              onClick={() => {
                setPage(page - 1);
                setCards({ isLoaded: true, isError, items });
              }}
            >
              &laquo;
            </button>
          ) : (
            <button type="button" className="disabled" disabled>
              &laquo;
            </button>
          )}
          {page < TOTAL_ITEMS / ITEMS_PER_PAGE ? (
            <button
              type="button"
              className="pages_next"
              onClick={() => {
                setPage(page + 1);
                setCards({ isLoaded: true, isError, items });
              }}
            >
              &raquo;
            </button>
          ) : (
            <button type="button" className="disabled" disabled>
              &raquo;
            </button>
          )}
        </div>
      ) : null}
    </>
  );
}

export default CardList;
