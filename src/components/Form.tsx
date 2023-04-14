/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useForm } from 'react-hook-form';

import { IFormCard } from 'utils/types';
import '../styles/_form.scss';
import { useAppDispatch } from '../app/hooks';
import { createPost } from '../features/posts/postsSlice';

type FormValues = {
  name: string;
  date: string;
  terms: boolean;
  language: string;
  avatar: string;
  sex: string | null;
};

function Form() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onSubmit' });

  const onSubmit = (data: FormValues) => {
    const cardData: IFormCard = {
      name: data.name || '',
      sex: data.sex! || '',
      birthday: data.date || '',
      language: data.language || 'English',
      terms: data.terms || false,
      file: URL.createObjectURL(data.avatar[0] as unknown as Blob | MediaSource),
    };

    dispatch(createPost(cardData));

    alert('Card created');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label htmlFor="username-input">
        <span>Name</span>
        <input
          type="text"
          id="username-input"
          data-testid="username-input"
          autoComplete="off"
          {...register('name', {
            required: 'The field is required',
            minLength: { value: 3, message: 'Minimum 3 characters' },
          })}
        />
      </label>
      {errors.name && <p className="form__error">Name is required (min 3 characters)</p>}
      <label htmlFor="date-input">
        <span>Birthday</span>
        <input
          type="date"
          id="date-input"
          {...register('date', {
            required: 'The field is required',
          })}
        />
      </label>
      {errors.date && <p className="form__error">Enter date</p>}
      <label htmlFor="language-select">
        <span>Language</span>
        <select
          id="language-select"
          defaultValue="English"
          {...register('language', {
            required: 'The field is required',
          })}
        >
          <option value="DEFAULT" disabled>
            Select language
          </option>
          <option value="English">English</option>
          <option value="Russian">Russian</option>
          <option value="Other">Other</option>
        </select>
      </label>
      {errors.language && <p className="form__error">Choose one language</p>}
      <div>
        <span>Sex</span>
        <div>
          <input
            {...register('sex', { required: 'The field is required' })}
            type="radio"
            id="sex-male-input"
            name="sex"
            value="male"
          />
          <p>male</p>
        </div>
        <div>
          <input
            {...register('sex', {
              required: 'The field is required',
            })}
            type="radio"
            id="sex-female-input"
            name="sex"
            value="female"
          />
          <p>female</p>
        </div>
      </div>
      {errors.sex && <p className="form__error">Enter your sex</p>}
      <label htmlFor="file-input">
        <span>Avatar</span>
        <input
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          accept="image/*"
          {...register('avatar', {
            required: 'The field is required',
          })}
        />
        <input
          type="button"
          value="Upload"
          onClick={() => {
            document.getElementById('file-input')!.click();
          }}
        />
      </label>
      {errors.avatar && <p className="form__error">Upload avatar</p>}
      <label htmlFor="terms-input">
        <span>I consent to my personal data</span>
        <input
          type="checkbox"
          id="terms-input"
          {...register('terms', {
            required: 'The field is required',
          })}
        />
      </label>
      {errors.terms && <p className="form__error">Confirm personal data</p>}
      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </form>
  );
}

export default Form;
