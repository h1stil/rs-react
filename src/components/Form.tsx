import React, { Component, createRef, FormEvent } from 'react';

import { IFormCard } from 'utils/types';
import '../styles/_form.scss';

type FormProps = {
  createCard: (card: IFormCard) => void;
};

type FormState = {
  name: '';
  date: '';
  select: '';
  checkbox: false;
  switcher: '';
  file: '';
};

class Form extends Component<FormProps, FormState> {
  inputNameRef: React.RefObject<HTMLInputElement>;
  inputBirthdayRef: React.RefObject<HTMLInputElement>;
  inputLanguagesRef: React.RefObject<HTMLSelectElement>;
  inputMaleRef: React.RefObject<HTMLInputElement>;
  inputFemaleRef: React.RefObject<HTMLInputElement>;
  inputAvatarRef: React.RefObject<HTMLInputElement>;
  inputTermsRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;

  constructor(props: FormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formRef = createRef();
    this.inputNameRef = createRef();
    this.inputBirthdayRef = createRef();
    this.inputLanguagesRef = createRef();
    this.inputMaleRef = createRef();
    this.inputFemaleRef = createRef();
    this.inputAvatarRef = createRef();
    this.inputTermsRef = createRef();
  }

  handleSubmit(event: FormEvent): void {
    event.preventDefault();

    let avatar = '';
    if (this.inputAvatarRef.current && this.inputAvatarRef.current.files) {
      avatar = URL.createObjectURL(this.inputAvatarRef.current.files[0]);
    }

    let sex = '';
    if (this.inputMaleRef.current && this.inputFemaleRef.current) {
      if (this.inputMaleRef.current.checked) {
        sex = this.inputMaleRef.current.value;
      }
      if (this.inputFemaleRef.current.checked) {
        sex = this.inputFemaleRef.current.value;
      }
    }

    const data: IFormCard = {
      name: this.inputNameRef.current?.value || '',
      birthday: this.inputBirthdayRef.current?.value || '',
      language: this.inputLanguagesRef.current?.value || 'English',
      sex: sex,
      terms: this.inputTermsRef.current?.checked || false,
      file: avatar,
    };

    this.props.createCard(data);
    // alert('Card dobavlena');
    (event.target as HTMLFormElement).reset();

    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} className="form">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            id="username-input"
            autoComplete="off"
            ref={this.inputNameRef}
          />
        </label>
        <label>
          <span>Birthday</span>
          <input type="date" name="birthday" id="date-input" ref={this.inputBirthdayRef} />
        </label>
        <label>
          <span>Language</span>
          <select
            name="language"
            id="language-select"
            defaultValue={'DEFAULT'}
            ref={this.inputLanguagesRef}
          >
            <option value="DEFAULT" disabled>
              Select language
            </option>
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span>Sex</span>
          <div>
            <input
              type="radio"
              id="sex-male-input"
              name="sex"
              value="male"
              ref={this.inputMaleRef}
            />
            <label>male</label>
          </div>
          <div>
            <input
              type="radio"
              id="sex-female-input"
              name="sex"
              value="female"
              ref={this.inputFemaleRef}
            />
            <label>female</label>
          </div>
        </label>
        <label>
          <span>Avatar</span>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            accept="image/*"
            ref={this.inputAvatarRef}
          />
          <input
            type="button"
            value="Upload"
            onClick={() => {
              document.getElementById('file-input')!.click();
            }}
          />
        </label>
        <label>
          <span>I consent to my personal data</span>
          <input type="checkbox" name="terms" id="terms-input" ref={this.inputTermsRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
