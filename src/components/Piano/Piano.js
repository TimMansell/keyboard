import React from 'react';
import Controls from '../Controls/Controls';
import Keys from '../Keys/Keys';
import './piano.scss';

function Piano() {
  return (
    <div className="piano">
      <Controls />
      <Keys />
    </div>
  );
}

export default Piano;
