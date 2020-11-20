import React from 'react';
import styles from './WorkoutExercise.module.css';
import { useDispatch } from 'react-redux';
import {
  removeExercise,
  updateSets,
  updateReps,
} from '../features/exerciseSlice';

function WorkoutExercise({ exercise }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeExercise(exercise.name));
  }

  function handleUpdate(e) {
    if (e.target.name === 'sets') {
      dispatch(updateSets({ name: exercise.name, sets: e.target.value }));
    } else {
      dispatch(updateReps({ name: exercise.name, reps: e.target.value }));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.exerciseInfo}>
        <img src={exercise.imageURL} alt="" />
        <p>{exercise.name}</p>
        <div className={styles.sets_reps}>
          <label>Sets:</label>
          <input
            type="number"
            value={exercise.sets}
            name="sets"
            onChange={handleUpdate}
          />
          <label>Reps:</label>
          <input
            type="number"
            value={exercise.reps}
            name="reps"
            onChange={handleUpdate}
          />
        </div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default WorkoutExercise;
