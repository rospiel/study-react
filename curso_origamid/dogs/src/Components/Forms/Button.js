import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
};

export default Button;
