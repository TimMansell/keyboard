import React from 'react';
import Piano from './components/Piano/Piano';
import { ControlsContextProvider } from './context/controls';
import styles from './App.module.scss';

function App() {
  return (
    <ControlsContextProvider>
      <div className={styles.app}>
        <Piano />
      </div>
      <p className={styles.rotateDevice}>
        Please rotate your device to landscape mode
      </p>
    </ControlsContextProvider>
  );
}

export default App;
