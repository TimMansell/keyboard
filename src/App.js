import React, { useState } from 'react';
import Piano from './components/Piano/Piano';

import keys25 from './config/25keys.json';
import keys37 from './config/37keys.json';
import keys49 from './config/49keys.json';
import keys61 from './config/61keys.json';

function App() {
  const keyLayout = {
    keys25,
    keys37,
    keys49,
    keys61,
  };

  const [chosenLayout, setChosenLayout] = useState('keys37');

  const setKeyLayout = (event) => {
    setChosenLayout(event.target.value);
  };

  return (
    <div className="app">
      <Piano keys={keyLayout[chosenLayout]} />
      <div className="choose-layout">
        Choose key layout:&nbsp;
        <select value={chosenLayout} onChange={(event) => setKeyLayout(event)}>
          <option value="keys25">25 keys</option>
          <option value="keys37">37 keys</option>
          <option value="keys49">49 keys</option>
          <option value="keys61">61 keys</option>
        </select>
      </div>
    </div>
  );
}

export default App;
