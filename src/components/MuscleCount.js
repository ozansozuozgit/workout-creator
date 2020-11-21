import React from 'react';
import ProgressBar from './ProgressBar';
import styles from './MuscleCount.module.css';

function MuscleCount({ muscle }) {
  return (
    <div className={styles.container}>
      <p>{muscle[0]}</p>
      <ProgressBar
        bgcolor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        completed={muscle[1] * 5}
      />
    </div>
  );
}

export default MuscleCount;
