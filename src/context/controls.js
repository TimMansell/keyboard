import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ControlsContext = createContext();

export const ControlsContextProvider = ({ children }) => {
  const [keys, setKeys] = useState('keys37');

  return (
    <ControlsContext.Provider value={{ keys, setKeys }}>
      {children}
    </ControlsContext.Provider>
  );
};

ControlsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
