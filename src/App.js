import React from 'react';
import Piano from './components/Piano/Piano';
import { ControlsContextProvider } from './context/controls';

function App() {
  return (
    <ControlsContextProvider>
      <div className="app">
        <Piano />
      </div>
      <p className="rotate-device">
        Please rotate your device to landscape mode
      </p>
      <p>test</p>
    </ControlsContextProvider>
  );
}

export default App;
