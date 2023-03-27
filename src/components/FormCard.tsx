import React from 'react';
import { IFormCard } from 'utils/types';
import '../styles/_formCard.scss';

function FormCard(props: IFormCard) {
  const getAge = (birdthday: string) => {
    const diff = Date.now() - new Date(birdthday.toString()).getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const { name, file, language, birthday, sex } = props;
  return (
    <div className="form__item">
      <img src={file} alt="avatar" />
      <p>name: {name}</p>
      <p>age: {getAge(birthday)}</p>
      <p>language: {language}</p>
      <p>sex: {sex}</p>
    </div>
  );
}

export default FormCard;
