import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './piano.scss';

import Keys from '../Keys/Keys';

function Piano({ keys }) {
  const classes = classnames('keys');

  return (
    <div className="piano">
      <div className="controls">
        <div className="speakers"></div>
        <div className="knobs">1</div>
        <div className="speakers"></div>
      </div>
      <div className={classes}>
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
