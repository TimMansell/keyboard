import React from 'react';
import Controls from '../Controls/Controls';
import Keys from '../Keys/Keys';
import styles from './Piano.module.scss';

function Piano() {
  return (
    <div className={styles.piano}>
      <Controls />
      <Keys />
    </div>
  );
}

export default Piano;
