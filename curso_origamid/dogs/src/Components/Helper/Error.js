import React from 'react';
import styles from './Error.module.css';
import propTypes from 'prop-types';

const Error = ({ error }) => {
  return error ? <p className={styles.error}>{error}</p> : null;
};

Error.propTypes = {
  error: propTypes.string,
};

export default Error;
