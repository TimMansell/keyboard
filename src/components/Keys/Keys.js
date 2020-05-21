import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './keys.scss';

function Keys({ type }) {
  const keysRef = useRef(null);

  const handleClick = () => {
    const key = keysRef.current;

    key.pause();
    key.currentTime = 0;
    key.play();
  };

  return (
    <div className="key">
      {type.map((key, index) => (
        <div className="key__btn" key={index} onClick={() => handleClick()}>
          <audio ref={keysRef}>
            <source src={`sounds/${key}.ogg`} type="audio/ogg"></source>
          </audio>
        </div>
      ))}
    </div>
  );
}

Keys.propTypes = {
  type: PropTypes.array.isRequired,
};

export default Keys;
