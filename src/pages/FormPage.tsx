import React from 'react';
import Form from '../components/Form';
import '../styles/_formPage.scss';

function FormPage() {
  document.title = 'Form';
  return (
    <div className="form__container">
      <h2>Create card</h2>
      <Form />
    </div>
  );
}

export default FormPage;
