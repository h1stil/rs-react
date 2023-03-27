/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';

class CardList extends Component<object, MyState> {
  constructor(props: MyState) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div style={{ textAlign: 'center' }}>Loading...</div>;
    }
    return (
      <div className="card__list">
        {Array.isArray(items) ? (
          items.map((item) => (
            <div key={item.id}>
              <Card {...item} />
            </div>
          ))
        ) : (
          <p>FF</p>
        )}
      </div>
    );
  }
}

export default CardList;
