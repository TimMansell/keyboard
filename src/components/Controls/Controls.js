import React from 'react';
import ChooseLayout from './ChooseLayout';
import styles from './Controls.module.scss';

function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.leftSpeaker}></div>
      <div className={styles.knobs}>
        <ChooseLayout />
      </div>
      <div className={styles.rightSpeaker}></div>
    </div>
  );
}

export default Controls;
