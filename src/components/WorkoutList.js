import React from 'react';
import styles from './WorkoutList.module.css';
import WorkoutCard from './WorkoutCard';

function WorkoutList({ workouts, removeWorkout }) {
  return (
    <div className={styles.container}>
      {workouts.map((workout, index) => (
        <WorkoutCard
          key={index}
          workout={workout}
          removeWorkout={removeWorkout}
        />
      ))}
    </div>
  );
}

export default WorkoutList;
