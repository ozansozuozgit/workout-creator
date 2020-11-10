import React from 'react';
import styles from './WorkoutCreator.module.css';
import ExerciseList from '../components/ExerciseList';
import Workout from '../components/Workout';
function WorkoutCreator() {
  return (
    <div className={styles.container}>
      <Workout />
      <ExerciseList />
    </div>
  );
}

export default WorkoutCreator;
