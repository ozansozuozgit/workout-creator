import React from 'react';
import styles from './WorkoutList.module.css';
import WorkoutCard from './WorkoutCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vw',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      duration: 1,
      bounce: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '-100vw',
  },
};

function WorkoutList({ workouts, removeWorkout }) {
  return (
    <div className={styles.container}>
      <h1>Workouts</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.workout_container}
      >
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            workout={workout}
            removeWorkout={removeWorkout}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default WorkoutList;
