import React, { Component, createRef, FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { IFormCard } from 'utils/types';
import '../styles/_form.scss';

type FormProps = {
  createCard: (card: IFormCard) => void;
};

type FormErrorState = {
  nameErrorState: boolean;
  dateErrorState: boolean;
  languageErrorState: boolean;
  sexErrorState: boolean;
  avatarErrorState: boolean;
  termsErrorState: boolean;
};

class Form extends Component<FormProps, FormErrorState> {
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
    this.state = {
      nameErrorState: false,
      dateErrorState: false,
      languageErrorState: false,
      sexErrorState: false,
      avatarErrorState: false,
      termsErrorState: false,
    };
  }

  handleSubmit(event: FormEvent): void {
    event.preventDefault();

    let avatar = '';
    if (this.inputAvatarRef.current && this.inputAvatarRef.current.files) {
      avatar = URL.createObjectURL(this.inputAvatarRef.current.files[0] as Blob | MediaSource);
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
      sex,
      terms: this.inputTermsRef.current?.checked || false,
      file: avatar,
    };

    if (
      this.state.avatarErrorState ||
      this.state.dateErrorState ||
      this.state.languageErrorState ||
      this.state.nameErrorState ||
      this.state.sexErrorState ||
      this.state.termsErrorState
    ) {
      return;
    }
    this.props.createCard(data);
    alert('Card created');
    (event.target as HTMLFormElement).reset();
  }

  validateForm = () => {
    this.nameValidation();
    this.dateValidation();
    this.termsValidation();
    this.sexValidation();
    this.languageValidation();
    this.avatarValidation();
  };

  nameValidation = () => {
    if (this.inputNameRef.current?.value.trim() === '') {
      this.setState({ nameErrorState: true });
    } else {
      this.setState({ nameErrorState: false });
    }

    if (this.inputNameRef.current!.value.length < 4) {
      this.setState({ nameErrorState: true });
    } else {
      this.setState({ nameErrorState: false });
    }
  };

  dateValidation = () => {
    const dateValue = this.inputBirthdayRef.current?.value;
    if (dateValue === '') {
      this.setState({ dateErrorState: true });
    } else {
      this.setState({ dateErrorState: false });
    }
  };

  sexValidation() {
    if (this.inputMaleRef.current && this.inputFemaleRef.current) {
      if (this.inputMaleRef.current.checked) {
        this.setState({ sexErrorState: false });
      } else if (this.inputFemaleRef.current.checked) {
        this.setState({ sexErrorState: false });
      } else {
        this.setState({ sexErrorState: true });
      }
    }
  }

  avatarValidation() {
    const files = this.inputAvatarRef.current?.files;
    if (!files?.length) {
      this.setState({ avatarErrorState: true });
    } else {
      this.setState({ avatarErrorState: false });
    }
  }

  termsValidation() {
    const flag = this.inputTermsRef.current?.checked;
    if (flag) {
      this.setState({ termsErrorState: false });
    } else {
      this.setState({ termsErrorState: true });
    }
  }

  languageValidation() {
    if (this.inputLanguagesRef.current?.value === 'DEFAULT') {
      this.setState({ languageErrorState: true });
    } else {
      this.setState({ languageErrorState: false });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} className="form">
        <label htmlFor="username-input">
          <span>Name</span>
          <input
            type="text"
            name="name"
            id="username-input"
            data-testid="username-input"
            autoComplete="off"
            ref={this.inputNameRef}
          />
        </label>
        {this.state.nameErrorState && (
          <p className="form__error">Name is required (min 3 characters)</p>
        )}
        <label htmlFor="date-input">
          <span>Birthday</span>
          <input type="date" name="birthday" id="date-input" ref={this.inputBirthdayRef} />
        </label>
        {this.state.dateErrorState && <p className="form__error">Enter date</p>}
        <label htmlFor="language-select">
          <span>Language</span>
          <select
            name="language"
            id="language-select"
            defaultValue="DEFAULT"
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
        {this.state.languageErrorState && <p className="form__error">Choose one language</p>}
        <div>
          <span>Sex</span>
          <div>
            <input
              type="radio"
              id="sex-male-input"
              name="sex"
              value="male"
              ref={this.inputMaleRef}
            />
            <p>male</p>
          </div>
          <div>
            <input
              type="radio"
              id="sex-female-input"
              name="sex"
              value="female"
              ref={this.inputFemaleRef}
            />
            <p>female</p>
          </div>
        </div>
        {this.state.sexErrorState && <p className="form__error">Enter your sex</p>}
        <label htmlFor="file-input">
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
        {this.state.avatarErrorState && <p className="form__error">Upload avatar</p>}
        <label htmlFor="terms-input">
          <span>I consent to my personal data</span>
          <input type="checkbox" name="terms" id="terms-input" ref={this.inputTermsRef} />
        </label>
        {this.state.termsErrorState && <p className="form__error">Confirm personal data</p>}
        <button type="submit" onClick={this.validateForm} data-testid="submit-button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
