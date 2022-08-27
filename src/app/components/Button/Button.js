import React from "react";
import PropTypes from "prop-types";

import styles from "./button.css";

function Button(props) {
  const { label, onClick, ...restProps } = props;

  const handleClick = (e) => {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick} {...restProps}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
