import React from 'react';
import styles from './AddExerciseModal.module.css';
import { setExercise, setChosenExercises } from '../features/exerciseSlice';
import { useDispatch } from 'react-redux';

function AddExerciseModal({ exercise }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setChosenExercises(exercise));
    dispatch(setExercise(null));
  }

  return (
    <div className={styles.container}>
      <h1>Modal</h1>
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default AddExerciseModal;
