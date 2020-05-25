import React from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import './key.scss';

function Key({ type }) {
  const synth = new Tone.Synth({
    oscillator: {
      partials: [3, 2, 1],
      type: 'custom',
      frequency: 'C#4',
      volume: -12,
    },
    envelope: {
      attack: 0.11,
      decay: 0.21,
      sustain: 1,
      release: 1.71,
      attackCurve: 'exponential',
      decayCurve: 'exponential',
      releaseCurve: 'exponential',
    },
  }).toMaster();

  const handleClick = (key) => {
    synth.triggerAttackRelease(key, '8n');
  };

  return (
    <div className="key">
      {type.map((key, index) => (
        <div
          className="key__btn"
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
