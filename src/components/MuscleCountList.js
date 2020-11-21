import React from 'react';
import styles from './MuscleCountList.module.css';
import MuscleCount from './MuscleCount';

function MuscleCountList({ workedMuscles, sum }) {
  return (
    <div className={styles.container}>
      {workedMuscles.map((muscle, index) => (
        <MuscleCount key={index} muscle={muscle} sum={sum} />
      ))}
    </div>
  );
}

export default MuscleCountList;
