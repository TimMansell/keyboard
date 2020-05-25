import React, { useContext } from 'react';
import { ControlsContext } from '../../context/controls';

function Controls() {
  const [keys, setKeys] = useContext(ControlsContext);

  const setKeyLayout = (event) => {
    setKeys(event.target.value);
  };

  return (
    <div className="choose-layout">
      Choose key layout:&nbsp;
      <select value={keys} onChange={(event) => setKeyLayout(event)}>
        <option value="keys25">25 keys</option>
        <option value="keys37">37 keys</option>
        <option value="keys49">49 keys</option>
        <option value="keys61">61 keys</option>
      </select>
    </div>
  );
}

export default Controls;
