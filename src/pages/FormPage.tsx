/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { IFormCard } from 'utils/types';
import Form from '../components/Form';
import FormCard from '../components/FormCard';
import '../styles/_formPage.scss';
import { useAppSelector } from '../app/hooks';

function FormPage() {
  const cards = useAppSelector((state) => state.posts);
  const [totalCards, setTotalCards] = useState<IFormCard[]>(cards);

  useEffect(() => {
    setTotalCards(cards);
  }, [cards]);

  document.title = 'Form';

  return (
    <div data-testid="forms-page">
      <div className="form__container">
        <h2>Create card</h2>
        <Form />
      </div>
      <div className="cards__container">
        {totalCards.map((card) => (
          <FormCard key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}

export default FormPage;
