import React from 'react';
import styles from './MuscleCountList.module.css';
import MuscleCount from './MuscleCount';
import { motion } from 'framer-motion';

function MuscleCountList({ workedMuscles, sum }) {
  const containerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 3,
        type: 'spring',
        bounce: 0.5,
      },
    },
    exit: {
      scale: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.container}>
        {workedMuscles.map((muscle, index) => (
          <MuscleCount key={index} muscle={muscle} sum={sum} />
        ))}
      </div>
    </motion.div>
  );
}

export default MuscleCountList;
