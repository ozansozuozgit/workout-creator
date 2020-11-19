import React, { useState } from 'react';
import styles from './Workout.module.css';
import { useSelector } from 'react-redux';
import { selectChosenExercises } from '../features/exerciseSlice';
import WorkoutExercise from './WorkoutExercise';

function Workout() {
  const chosenExercises = useSelector(selectChosenExercises);
  const [text, setText] = useState('');

  function handleInput(e) {
    setText(e.value);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter Workout Name"
        onChange={handleInput}
        value={text}
      />
      {chosenExercises &&
        chosenExercises.map((exercise) => (
          <WorkoutExercise exercise={exercise} />
        ))}
      <button>Save Workout</button>
    </div>
  );
}

export default Workout;
