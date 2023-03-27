import React, { Component } from 'react';

import '../styles/_card.scss';
import { MyCard } from 'utils/types';

class Card extends Component<MyCard> {
  constructor(props: MyCard) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, images, description, stock, price } = this.props;

    return (
      <div className="card">
        <h4 className="card__title">{title}</h4>
        <img src={images[0]} alt="card" />
        <div className="card__description">
          <p className="desciption__text">{description}</p>
        </div>
        <div className="card__price">
          <p className="price__stock">stock: {stock}</p>
          <p className="price__price">price: ${price}</p>
        </div>
      </div>
    );
  }
}

export default Card;
