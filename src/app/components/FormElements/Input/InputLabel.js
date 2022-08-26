import React from 'react';
import PropTypes from 'prop-types';

import styles from './input.css';

function InputLabel(props) {
  const { inputId, labelText, ...restProps } = props;

  return (
    <label for={inputId} className={styles.inputLabel} {...restProps}>
      {labelText}
    </label>
  );
}

InputLabel.propTypes = {
  inputId: PropTypes.string,
  labelText: PropTypes.string
};

export default InputLabel;