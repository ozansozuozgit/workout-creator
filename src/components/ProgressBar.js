import React, { useState, useEffect } from 'react';
import { selectTotalMuscleCount } from '../features/workoutsSlice';
import { useSelector } from 'react-redux';

function ProgressBar({ bgcolor, muscleCount }) {
  const [completedWith, setCompletedWith] = useState(0);
  const sum = useSelector(selectTotalMuscleCount);

  useEffect(() => {
    setTimeout(() => {
      setCompletedWith(Math.round((muscleCount / sum) * 100));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sum]);
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    boxShadow: '0 0 5px black',
  };

  const fillerStyles = {
    height: '100%',
    width: `${completedWith}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 2s ease-in-out',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
}

export default ProgressBar;
