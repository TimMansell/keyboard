import React from 'react';
import PropTypes from 'prop-types';
import styles from './Key.module.scss';

import playKey from '../../service/audio';

function Key({ type }) {
  const handleClick = (key) => {
    playKey(key);
  };

  return (
    <div className={styles.key}>
      {type.map((key, index) => (
        <div
          className={styles.btn}
          key={index}
          onClick={() => handleClick(key)}
        ></div>
      ))}
    </div>
  );
}

Key.propTypes = {
  type: PropTypes.array.isRequired,
};

export default Key;
