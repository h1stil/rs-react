/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { IFormCard } from 'utils/types';
import Form from '../components/Form';
import FormCard from '../components/FormCard';
import '../styles/_formPage.scss';

type FormPageState = {
  cards: IFormCard[];
};

function FormPage() {
  const [totalCards, setTotalCards] = useState<FormPageState>({ cards: [] });

  const createCard = (card: IFormCard) => {
    setTotalCards((state: FormPageState) => ({ cards: [...state.cards, card] }));
  };

  document.title = 'Form';
  return (
    <>
      <div className="form__container">
        <h2>Create card</h2>
        <Form createCard={(card) => createCard(card)} />
      </div>
      <div className="cards__container">
        {totalCards.cards.map((card) => (
          <FormCard key={card.name} {...card} />
        ))}
      </div>
    </>
  );
}

export default FormPage;
