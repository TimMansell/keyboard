import React, { useContext } from 'react';
import { ControlsContext } from '../../context/controls';
import styles from './ChooseLayout.module.scss';

const keyLayoutOptions = [
  {
    label: '25 keys',
    value: 'keys25',
  },
  {
    label: '37 keys',
    value: 'keys37',
  },
  {
    label: '49 keys',
    value: 'keys49',
  },
  {
    label: '61 keys',
    value: 'keys61',
  },
];

function Controls() {
  const { keys, setKeys } = useContext(ControlsContext);

  const setLayout = (event) => {
    setKeys(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Choose key layout:</label>
      <select value={keys} onChange={(event) => setLayout(event)}>
        {keyLayoutOptions.map((layout, index) => (
          <option value={layout.value} key={index}>
            {layout.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Controls;
