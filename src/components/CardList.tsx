import React, { Component } from 'react';
import { MyState } from 'utils/types';
import Card from './Card';

class CardList extends Component {
  state: MyState = {
    error: null,
    isLoaded: false,
    items: [],
  };

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
    } else if (!isLoaded) {
      return <div style={{ textAlign: 'center' }}>Loading...</div>;
    } else {
      return (
        <div className="card__list">
          {Array.isArray(items) ? (
            items.map((item) => (
              <div key={item.id}>
                <Card
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  rating={item.rating}
                  stock={item.stock}
                  brand={item.brand}
                  category={item.category}
                  thumbnail={item.thumbnail}
                  images={item.images}
                />
              </div>
            ))
          ) : (
            <p>FF</p>
          )}
        </div>
      );
    }
  }
}

export default CardList;
