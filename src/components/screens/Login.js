import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import isEmail from 'validator/lib/isEmail';
import { auth } from '../../firebase';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function onSubmit(data) {
    try {
      // setLoading(true);
      await auth.signInWithEmailAndPassword(data.email, data.password);
      console.log('Sign in successful.');

      history.push('/');
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
    // setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
