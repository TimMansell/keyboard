import React, { useContext } from 'react';
import { ControlsContext } from '../../context/controls';
import Key from './Key';
import styles from './Keys.module.scss';

import keys25 from '../../config/25keys.json';
import keys37 from '../../config/37keys.json';
import keys49 from '../../config/49keys.json';
import keys61 from '../../config/61keys.json';

const keyLayouts = {
  keys25,
  keys37,
  keys49,
  keys61,
};

function Keys() {
  const { keys } = useContext(ControlsContext);

  return (
    <div className={styles.keys}>
      {keys &&
        keyLayouts[keys].keys.map((key, index) => (
          <Key key={index} type={key} />
        ))}
    </div>
  );
}

export default Keys;
