import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { setUser } from '../../features/userSlice';

function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function onSubmit(data) {
    try {
      setLoading(true);
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      console.log('Signup successful.');
      dispatch(
        setUser({
          username: data.username,
          uid: auth.currentUser.uid,
        })
      );
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>Username</label>
          <input
            name="username"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.username && <p>Please enter a username</p>}
          <label>Email</label>
          <input
            name="email"
            defaultValue="test"
            ref={register({
              required: true,
              validate: (input) => isEmail(input),
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
          <input type="submit" disabled={loading} />
        </form>
      </div>
    </div>
  );
}

export default Signup;
