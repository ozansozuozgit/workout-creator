import React, { useState, useEffect } from 'react';
import styles from './WorkoutCreatorScreen.module.css';
import axios from 'axios';

const WorkoutCreator = () => {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const { data } = await axios.get('/api/exercises');
      setExerciseList(data);
    };
    fetchExercises();
  }, []);

  return (
    <div>
      <h1>Workout</h1>
    </div>
  );
};

export default WorkoutCreator;
