import React, { useEffect } from 'react';
import styles from './Exercise.module.css';

function Exercise({ exercise }) {
  useEffect(() => {
    // console.log({ exercise });
  }, []);
  const { imageURL, average, name, targetMuscle, equipment } = exercise;

  return (
    <div className={styles.container}>
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
