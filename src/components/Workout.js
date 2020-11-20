import React, { useState } from 'react';
import styles from './Workout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectChosenExercises } from '../features/exerciseSlice';
import { setWorkout } from '../features/workoutsSlice';
import WorkoutExercise from './WorkoutExercise';
import { useHistory } from 'react-router-dom';

function Workout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const chosenExercises = useSelector(selectChosenExercises);
  const [title, setTitle] = useState('');

  function handleInput(e) {
    setTitle(e.target.value);
  }

  function saveWorkout() {
    dispatch(setWorkout({ title, ...chosenExercises }));
    history.push('/');
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter Workout Name"
        onChange={handleInput}
        value={title}
      />
      {chosenExercises &&
        chosenExercises.map((exercise, index) => (
          <WorkoutExercise exercise={exercise} key={index} />
        ))}
      <button onClick={saveWorkout}>Save Workout</button>
    </div>
  );
}

export default Workout;
