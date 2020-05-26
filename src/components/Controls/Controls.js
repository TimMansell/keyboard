import React from 'react';
import ChooseLayout from './ChooseLayout';
import styles from './Controls.module.scss';

function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.speakersLeft}></div>
      <div className={styles.knobs}>
        <ChooseLayout />
      </div>
      <div className={styles.speakersRight}></div>
    </div>
  );
}

export default Controls;
