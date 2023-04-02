import React from 'react';
import { IFormCard } from 'utils/types';
import '../styles/_formCard.scss';

function FormCard(props: IFormCard) {
  const getAge = (birdthday: string) => {
    const diff = Date.now() - new Date(birdthday.toString()).getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  return (
    <div className="form__item">
      <img src={props.file} alt="avatar" />
      <p>name: {props.name}</p>
      <p>age: {getAge(props.birthday)}</p>
      <p>language: {props.language}</p>
      <p>sex: {props.sex}</p>
    </div>
  );
}

export default FormCard;
