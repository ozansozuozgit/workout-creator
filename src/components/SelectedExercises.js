import React from 'react';
import styles from './SelectedExercises.module.css';
import { useSelector } from 'react-redux';
import { selectChosenExercises } from '../features/exerciseSlice';
import SelectedExercise from './SelectedExercise';

function SelectedExercises() {
  const chosenExercises = useSelector(selectChosenExercises);

  return (
    <div className={styles.container}>
      <div className={styles.chosen_exercise_container}>
        {chosenExercises &&
          chosenExercises.map((exercise, index) => (
            <SelectedExercise exercise={exercise} key={index} />
          ))}
      </div>
    </div>
  );
}

export default SelectedExercises;
