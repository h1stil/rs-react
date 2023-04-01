import React from 'react';
import { IFormCard } from 'utils/types';
import '../styles/_formCard.scss';

function FormCard(props: IFormCard) {
  const getAge = (birdthday: string) => {
    const diff = Date.now() - new Date(birdthday.toString()).getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const avatarSrc = URL.createObjectURL(props.file as unknown as Blob | MediaSource);
  return (
    <div className="form__item">
      <img src={avatarSrc} alt="avatar" />
      <p>name: {props.name}</p>
      <p>age: {getAge(props.birthday)}</p>
      <p>language: {props.language}</p>
      <p>sex: {props.sex}</p>
    </div>
  );
}

export default FormCard;
