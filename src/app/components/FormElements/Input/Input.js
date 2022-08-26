import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.css';

function Input(props) {
  const { type, ...restProps } = props;

  return <input type={type} className={styles.input} {...restProps} />;
}

Input.propTypes = {
  type: PropTypes.string
};

export default Input;