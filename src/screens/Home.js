import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import {
  clearCurrentWorkoutID,
  clearCurrentWorkoutTitle,
} from '../features/workoutsSlice';
import { clearList } from '../features/exerciseSlice';
import { useSelector, useDispatch } from 'react-redux';
import WorkoutList from '../components/WorkoutList';
import MuscleCountList from '../components/MuscleCountList';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

function Home() {
  const [workouts, setWorkout] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [workedMuscles, setWorkedMuscles] = useState([]);
  const allMuscles = [];
  const [sum, setSum] = useState(0);

  const containerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 0,
    },
  };

  useEffect(() => {
    getWorkouts();

    dispatch(clearCurrentWorkoutID());
    dispatch(clearCurrentWorkoutTitle());
    dispatch(clearList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getWorkouts() {
    setWorkout([]);
    setWorkedMuscles([]);
    db.collection('workouts')
      .where('uid', '==', user.uid)
      .get()
      .then((snapshots) => {
        snapshots.forEach((workout) => {
          setWorkout((prevArray) => [
            ...prevArray,
            { ...workout.data(), id: workout.id },
          ]);
          getMuscleCount(workout);
        });
      });
  }

  function getMuscleCount(workout) {
    workout.data().chosenExercises.forEach((exercise) => {
      allMuscles.push({
        targetMuscle: exercise.targetMuscle,
        sets: exercise.sets,
        reps: exercise.reps,
      });
    });
    let counts = {};

    allMuscles.forEach((el) => {
      counts[el.targetMuscle] = counts[el.targetMuscle]
        ? counts[el.targetMuscle] + 1
        : 1;
    });
    let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setWorkedMuscles(sorted);
    getTotal(sorted);
  }

  function getTotal(sorted) {
    let total = 0;
    for (let i = 0; i < sorted.length; i++) {
      total += sorted[i][1];
      setSum(sum + sorted[i][1]);
    }
    setSum(total);
  }

  function removeWorkout() {
    setTimeout(() => {
      getWorkouts();
    }, 700);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <Navbar user={user} />

      {workouts && (
        <WorkoutList workouts={workouts} removeWorkout={removeWorkout} />
      )}

      {workedMuscles && (
        <MuscleCountList workedMuscles={workedMuscles} sum={sum} />
      )}
    </motion.div>
  );
}

export default Home;
