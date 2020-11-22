import React from 'react';
import styles from './WorkoutList.module.css';
import WorkoutCard from './WorkoutCard';

function WorkoutList({ workouts, removeWorkout }) {

  return (
    <div className={styles.container}>
      {workouts.length ? (
        <h1>Workouts</h1>
      ) : (
        <h1>Create a Workout to get started!</h1>
      )}
      <div className={styles.workout_container}>
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            workout={workout}
            removeWorkout={removeWorkout}
          />
        ))}
      </div>
    </div>
  );
}

export default WorkoutList;
