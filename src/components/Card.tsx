import React, { FC } from 'react';

import '../styles/_card.scss';
import { MyCard } from 'utils/types';

const Card: FC<MyCard> = (props) => {
  return (
    <div className="card">
      <h4 className="card__title">{props.title}</h4>
      <img src={props.thumbnail} alt="card" />
      <div className="card__description">
        <p className="desciption__text">{props.description}</p>
      </div>
      <div className="card__price">
        <p className="price__stock">stock: {props.stock}</p>
        <p className="price__price">price: ${props.price}</p>
      </div>
    </div>
  );
};

export default Card;
