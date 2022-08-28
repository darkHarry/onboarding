import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.css';

function InputLabel(props) {
  const { inputId, labelText, children, ...restProps } = props;

  return (
    <label htmlFor={inputId} className={styles.inputLabel} {...restProps}>
      {labelText || children}
    </label>
  );
}

InputLabel.propTypes = {
  inputId: PropTypes.string,
  labelText: PropTypes.node,
  children: PropTypes.node
};

export default InputLabel;
