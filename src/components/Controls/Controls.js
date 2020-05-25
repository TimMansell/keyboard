import React from 'react';
import ChooseLayout from './ChooseLayout';
import './controls.scss';

function Controls() {
  return (
    <div className="controls">
      <div className="speakers speakers--left"></div>
      <div className="knobs">
        <ChooseLayout />
      </div>
      <div className="speakers speakers--right"></div>
    </div>
  );
}

export default Controls;
