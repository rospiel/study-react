import React from 'react';
import propTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

Input.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Input;
