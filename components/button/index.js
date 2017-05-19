import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const Button = ({ children, onClick, style = {} }) => (
  <button
    style={{ ...buttonStyles, ...style }}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
