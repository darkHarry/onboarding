import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.css';

function Input(props) {
  const { type, onChange, adornment, ...restProps } = props;

  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value, e);
    }
  };

  if (adornment) {
    return (
      <div className={styles.container}>
        <span className={styles.adornment}>{adornment}</span>
        <input type={type} onChange={handleChange} className={styles.input} {...restProps} />;
      </div>
    );
  }

  return <input type={type} onChange={handleChange} className={styles.input} {...restProps} />;
}

Input.propTypes = {
  type: PropTypes.string,
  adornment: PropTypes.node,
  onChange: PropTypes.func
};

export default Input;
