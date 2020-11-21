import React from 'react';
import ProgressBar from './ProgressBar';
import styles from './MuscleCount.module.css';

function MuscleCount({ muscle, sum }) {
  return (
    <div className={styles.container}>
      <h4>{muscle[0]}</h4>
      <ProgressBar
        bgcolor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        completed={Math.round((muscle[1] / sum) * 100)}
      />
    </div>
  );
}

export default MuscleCount;
