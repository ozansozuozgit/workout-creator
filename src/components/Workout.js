import React from 'react';
import styles from './Workout.module.css';
import { useSelector } from 'react-redux';
import { selectChosenExercises } from '../features/exerciseSlice';
import Exercise from './Exercise';

function Workout() {
  const chosenExercises = useSelector(selectChosenExercises);
  return (
    <div className={styles.container}>
      <h1>workout</h1>
      {chosenExercises &&
        chosenExercises.map((exercise) => <Exercise exercise={exercise} />)}
      <button>Save Workout</button>
    </div>
  );
}

export default Workout;
