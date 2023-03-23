import React from 'react';
import { IFormCard } from 'utils/types';
import '../styles/_formCard.scss';

function FormCard(props: IFormCard) {
  return (
    <div className="form__item">
      <img src={props.file} alt="avatar" />
      <p>name: {props.name}</p>
      <p>date: {props.birthday}</p>
      <p>language: {props.language}</p>
      <p>sex: {props.sex}</p>
    </div>
  );
}

export default FormCard;
