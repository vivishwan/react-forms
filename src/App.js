import React, { useState } from 'react';
import './index.css';

export default function App() {
  //useState for form values
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  //useState  for Submit status
  const [submitted, setSubmitted] = useState(false);

  //useState for a valid submit request, use this in the success-message class, because it keeps showing even if either one of the input fields is empty and when we click submit.
  const [valid, setValid] = useState(false);

  //handler functions for the input in the form
  const handleFirstName = (event) => {
    //spread operator
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastName = (event) => {
    //spread operator
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmail = (event) => {
    //spread operator
    setValues({ ...values, email: event.target.value });
  };

  //submit handler
  const handleSubmit = (event) => {
    //to prevent refresh, which clears the input fields after submit
    event.preventDefault();

    //valid useState check here:
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
      // check the input values in console:
      console.log(values);
    }
    setSubmitted(true);
  };

  // because we want to view the error msg for each input field, we need a different 'valid' state for this condition check

  return (
    <div className='form-container'>
      {/*--> add onChange attribute inside the input field */}
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className='success-message'>
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          onChange={handleFirstName}
          value={values.firstName}
          id='first-name'
          className='form-field'
          type='text'
          placeholder='First Name'
          name='firstName'
        />
        {submitted && !values.firstName ? (
          <span id='first-name-error'>Please enter a first name</span>
        ) : null}
        <input
          // onChange={setValues()}
          onChange={handleLastName}
          value={values.lastName}
          id='last-name'
          className='form-field'
          type='text'
          placeholder='Last Name'
          name='lastName'
        />
        {submitted && !values.lastName ? (
          <span id='last-name-error'>Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmail}
          value={values.email}
          id='email'
          className='form-field'
          type='text'
          placeholder='Email'
          name='email'
        />
        {submitted && !values.email ? (
          <span id='email-error'>Please enter a email</span>
        ) : null}
        <button className='form-field' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}
