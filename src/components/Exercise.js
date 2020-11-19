import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExercise } from '../features/exerciseSlice';
import styles from './Exercise.module.css';

function Exercise({ exercise }) {
  const dispatch = useDispatch();

  const { imageURL, average, name, targetMuscle, equipment } = exercise;

  function handleClick() {
    dispatch(setExercise(exercise));
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
