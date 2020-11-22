import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setExercise,
  selectChosenExercises,
  setChosenExercises,
} from '../features/exerciseSlice';
import styles from './Exercise.module.css';

function Exercise({ exercise }) {
  const dispatch = useDispatch();
  const chosenExercises = useSelector(selectChosenExercises);

  const { imageURL, average, name, targetMuscle, equipment } = exercise;

  function handleClick() {
    let duplicate = false;
    for (let chosenExercise of chosenExercises) {
      if (name === chosenExercise.name) duplicate = true;
    }
    if (duplicate) {
      alert(`Exercise already chosen!`);
      return;
    }
    // dispatch(setExercise(exercise));
    let newExercise = { ...exercise };
    newExercise.sets = '1';
    newExercise.reps = '1';
    dispatch(setChosenExercises(newExercise));
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <h1>{name}</h1>
      <img src={imageURL} alt="" />
      <div className={styles.info_container}>
        <p>Average: {average}</p>
        <p>Targeted Muscle: {targetMuscle}</p>
        <p>Equipment: {equipment}</p>
      </div>
    </div>
  );
}

export default Exercise;
