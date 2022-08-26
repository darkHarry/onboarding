import React from "react";
import PropTypes from "prop-types";

import styles from "./button.css";

function Button(props) {
  const { label, ...restProps } = props;

  return (
    <button type="button" className={styles.button} {...restProps}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
