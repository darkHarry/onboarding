import React from 'react';
import PropTypes from 'prop-types';

import styles from './radiocard.css';

function RadioCard(props) {
  const { onClick, iconSrc, title, text } = props;

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div role="radio" onClick={handleClick} className={styles.wrapper}>
      <img className={styles.icon} src={iconSrc} role="presentation" />
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}

RadioCard.propTypes = {
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default RadioCard;
