/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import { IFormCard } from 'utils/types';
import Form from '../components/Form';
import FormCard from '../components/FormCard';
import '../styles/_formPage.scss';

type FormPageProps = Record<string, never>;
type FormPageState = {
  cards: IFormCard[];
};

class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  createCard(card: IFormCard) {
    this.setState((state: FormPageState) => ({ cards: [...state.cards, card] }));
  }

  render() {
    document.title = 'Form';
    const { cards } = this.state;
    return (
      <>
        <div className="form__container">
          <h2>Create card</h2>
          <Form createCard={(card) => this.createCard(card)} />
        </div>
        <div className="cards__container">
          {cards.map((card) => (
            <FormCard key={card.name} {...card} />
          ))}
        </div>
      </>
    );
  }
}

export default FormPage;
