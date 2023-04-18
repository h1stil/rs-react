/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Card from './Card';
import '../styles/_paginations.scss';
import { useAppSelector } from '../app/hooks';
import { useSearchUsersQuery } from '../features/api/searchApi';

function CardList() {
  const value = useAppSelector((state) => state.search.search);
  const { data = [], error, isFetching } = useSearchUsersQuery(value);

  if (error) {
    const err = error as Error;
    return <div>Error: {err.message}</div>;
  }

  if (isFetching) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div className="card__list">
      {data.length ? (
        data.map((item) => (
          <div key={item.id}>
            <Card {...item} />
          </div>
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default CardList;
