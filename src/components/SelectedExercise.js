import React from 'react';
import styles from './SelectedExercise.module.css';
import { useDispatch } from 'react-redux';
import {
  removeExercise,
  updateSets,
  updateReps,
} from '../features/exerciseSlice';

function SelectedExercise({ exercise }) {
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
      <h4>{exercise.name}</h4>
      <img src={exercise.imageURL} alt="" />
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
      <button className={styles.close} onClick={handleRemove}></button>
    </div>
  );
}

export default SelectedExercise;
