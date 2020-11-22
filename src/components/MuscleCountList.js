import React from 'react';
import styles from './MuscleCountList.module.css';
import MuscleCount from './MuscleCount';

function MuscleCountList({ workedMuscles }) {
  return (
    <div className={styles.container}>
      {workedMuscles.map((muscle, index) => (
        <MuscleCount key={index} muscle={muscle}/>
      ))}
    </div>
  );
}

export default MuscleCountList;
