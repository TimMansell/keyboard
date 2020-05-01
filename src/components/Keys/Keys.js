import React from 'react';
import PropTypes from 'prop-types';
import './keys.scss';

function Keys({ type }) {
  const handleClick = (key) => {
    console.log('click', key);

    const audio = new Audio(`sounds/${key}.ogg`);
    audio.play();
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

Keys.propTypes = {
  type: PropTypes.array.isRequired,
};

export default Keys;
