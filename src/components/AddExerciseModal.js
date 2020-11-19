import React, { useState } from 'react';
import styles from './AddExerciseModal.module.css';
import { setExercise, setChosenExercises } from '../features/exerciseSlice';
import { useDispatch } from 'react-redux';

function AddExerciseModal({ exercise }) {
  const dispatch = useDispatch();
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);

  function handleClick() {
    let newExercise = { ...exercise };
    newExercise.sets = sets;
    newExercise.reps = reps;
    dispatch(setChosenExercises(newExercise));
    dispatch(setExercise(null));
  }

  function handleInput(e) {
    if (e.target.name === 'sets') {
      setSets(e.target.value);
    } else setReps(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.info_container}>
        <div className={styles.exerciseInfo}>
          <h3>{exercise.name}</h3>
          <img src={exercise.imageURL} alt="" />
        </div>
        <div className={styles.sets_reps_container}>
          <label htmlFor="sets">Sets</label>
          <input
            type="text"
            name="sets"
            id="sets"
            onChange={handleInput}
            placeholder="SETS"
          />
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            name="reps"
            id="reps"
            onChange={handleInput}
            placeholder="REPS"
          />
        </div>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  );
}

export default AddExerciseModal;
