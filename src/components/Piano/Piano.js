import React from 'react';
import PropTypes from 'prop-types';
import './piano.scss';

import Keys from '../Keys/Keys';

function Piano({ keys }) {
  return (
    <div className="piano">
      <div className="keys">
        {keys.keys.map((key, index) => (
          <Keys key={index} type={key} />
        ))}
      </div>
    </div>
  );
}

Piano.propTypes = {
  keys: PropTypes.object.isRequired,
};

export default Piano;
