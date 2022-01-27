import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  console.log(props);
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
};

export default Button;
