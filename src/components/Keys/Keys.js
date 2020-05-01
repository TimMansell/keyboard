import React from 'react';
import PropTypes from 'prop-types';
import './keys.scss';

function Keys({ type }) {
  return (
    <div className="key">
      {type.map((key, index) => (
        <div className="key__btn" key={index}></div>
      ))}
    </div>
  );
}

Keys.propTypes = {
  type: PropTypes.object.isRequired,
};

export default Keys;
