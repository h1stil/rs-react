import React, { useState } from 'react';

import '../styles/_card.scss';
import { MyCard } from 'utils/types';
import Modal from './Modal';

function Card(props: MyCard) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="card">
      <h4 className="card__title">{props.title}</h4>
      <img src={props.thumbnail} alt="card" />
      <div className="card__price">
        <p className="price__stock">stock: {props.stock}</p>
        <p className="price__price">price: ${props.price}</p>
      </div>
      <button type="button" className="card__details" onClick={() => setIsOpen(true)}>
        Details
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <>
          <h4 className="card__title">{props.title}</h4>
          <img src={props.thumbnail} alt="card" />
          <div className="card__description">
            <p className="desciption__text" style={{ maxWidth: '400px' }}>
              {props.description}
            </p>
          </div>
          <div className="card__price">
            <p className="price__stock">stock: {props.stock}</p>
            <p className="price__price">price: ${props.price}</p>
          </div>
        </>
      </Modal>
    </div>
  );
}

export default Card;
