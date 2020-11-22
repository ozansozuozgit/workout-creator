import React from 'react';
import ProgressBar from './ProgressBar';
import styles from './MuscleCount.module.css';

function MuscleCount({ muscle }) {
  function randDarkColor() {
    let lum = -0.25;
    let hex = String(
      '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
    ).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = '#',
      c,
      i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }
    return rgb;
  }

  return (
    <div className={styles.container}>
      <h4>{muscle[0]}</h4>
      <ProgressBar bgcolor={randDarkColor()} muscleCount={muscle[1]} />
    </div>
  );
}

export default MuscleCount;
