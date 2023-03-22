import React from 'react';
import { IFormCard } from 'utils/types';

function FormCard(props: IFormCard) {
  return (
    <div className="form__item">
      <p>name: {props.name}</p>
      <p>date: {props.date}</p>
      <p>select: {props.select}</p>
      <p>switcher: {props.switcher}</p>
      <p>checkbox: {props.checkbox}</p>
      <p>file: {props.file}</p>
    </div>
  );
}

export default FormCard;
