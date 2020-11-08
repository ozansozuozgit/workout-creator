import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { signup } from '../../features/userSlice';

function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  function onSubmit(data) {
    console.log(data);
    try {
    } catch (error) {}
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Email</label>
          <input
            name="email"
            defaultValue="test"
            ref={register({
              required: true,
              validate: (input) => isEmail(input), // returns true if valid
            })}
          />
          {errors.email && <p>Please enter a valid email</p>}
          <label>Password</label>
          <input
            name="password"
            ref={register({ required: true, minLength: 6, maxLength: 12 })}
          />
          {errors.password && (
            <p>Please enter a password between 6-12 characters</p>
          )}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
