import React, { Component, FormEvent } from 'react';

import { IFormCard } from 'utils/types';
import '../styles/_form.scss';

class Form extends Component {
  constructor(props: string) {
    super(props);
  }

  handleSubmit(event: FormEvent): void {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          <span>Name</span>
          <input type="text" name="name" id="username-input" autoComplete="off" />
        </label>
        <label>
          <span>Birthday</span>
          <input type="date" name="birthday" id="date-input" />
        </label>
        <label>
          <span>Language</span>
          <select name="language" id="language-select">
            <option disabled selected>
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
            <input type="radio" id="sex-male-input" name="sex" value="male" />
            <label htmlFor="age1">male</label>
          </div>
          <div>
            <input type="radio" id="sex-female-input" name="sex" value="female" />
            <label htmlFor="age1">female</label>
          </div>
        </label>
        <label>
          <span>Avatar</span>
          <input type="file" id="file-input" style={{ display: 'none' }} />
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
          <input type="checkbox" name="terms" id="terms-input" accept="image/*" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
