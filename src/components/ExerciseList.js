import React, { useState, useEffect } from 'react';
import styles from './ExerciseList.module.css';
import db from '../firebase';
import Exercise from './Exercise';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const docRef = db.collection('exercises').doc('exerciseList');

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          setExerciseList(doc.data().exerciseList);
        } else {
          console.log('No such document!');
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
        {exerciseList &&
          exerciseList.map((exercise) => <Exercise exercise={exercise} />)}
    </div>
  );
}

export default ExerciseList;
