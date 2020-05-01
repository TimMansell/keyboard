import React from 'react';
import './piano.scss';
import keys from './88keys.json';

import Keys from '../Keys/Keys';

function Piano() {
  return (
    <div className="piano">
      {keys.keys.map((key, index) => (
        <Keys key={index} type={key} />
      ))}
    </div>
  );
}

export default Piano;
