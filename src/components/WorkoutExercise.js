import React from 'react';
import styles from './WorkoutExercise.module.css';

function WorkoutExercise({ exercise }) {
  return (
    <div className={styles.container}>
      <h1>{exercise.name}</h1>
    </div>
  );
}

export default WorkoutExercise;
