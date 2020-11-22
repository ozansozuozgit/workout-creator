import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignupLogin.module.css';
import isEmail from 'validator/lib/isEmail';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { selectUser } from '../features/userSlice';
import { motion } from 'framer-motion';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if (user) history.push('/');
  }, [user, history]);

  const containerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 0,
    },
  };

  function onSubmit(data) {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => alert(error.message));
    console.log(user);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.form_container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {errors.username && <p>Please enter a username</p>}
          <label>Email</label>
          <input
            name="email"
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
          <input type="submit" disabled={loading} value="submit" />
        </form>
        <span>
          Need an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </motion.div>
  );
}

export default Login;
