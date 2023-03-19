import React, { Component } from 'react';

import '../styles/_card.scss';
import { MyCard } from 'utils/types';

class Card extends Component<MyCard> {
  constructor(props: MyCard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h4 className="card__title">{this.props.title}</h4>
        <img src={this.props.images[0]} alt="image" />
        <div className="card__description">
          <p className="desciption__text">{this.props.description}</p>
        </div>
        <div className="card__price">
          <p className="price__stock">stock: {this.props.stock}</p>
          <p className="price__price">price: ${this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Card;
