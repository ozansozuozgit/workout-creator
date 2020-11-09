import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Signup.module.css';
import isEmail from 'validator/lib/isEmail';
import { Link, useHistory } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function Signup() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);
  
  function onSubmit(data) {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch((error) => alert(error.message));
    console.log(user);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h1>Signup</h1>
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
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
