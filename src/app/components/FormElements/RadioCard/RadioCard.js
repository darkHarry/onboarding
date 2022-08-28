import React from 'react';
import PropTypes from 'prop-types';

import styles from './radiocard.css';

function RadioCard(props) {
  const { iconSrc, title, text, selected } = props;
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={iconSrc} role="presentation" />
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

RadioCard.propTypes = {
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  selected: PropTypes.bool
};

export default RadioCard;
