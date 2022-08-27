import React from 'react';
import PropTypes from 'prop-types';

import { cls } from 'src/lib/utils';
import { STEP_POSITIONS } from 'src/lib/constants';

import styles from './step.css';

function Step(props) {
  const { filled, position, number } = props;

  const startStep = () => {
    return (
      <div className={cls(styles.wrapper, styles.edgeStep)}>
        <div className={cls(styles.step, {[styles.filled]: filled})}>{number}</div>
        <div className={cls(styles.stepLine, {[styles.filled]: filled})}></div>
      </div>
    );
  }

  const middleStep = () => {
    return (
      <div className={styles.wrapper}>
        <div className={cls(styles.stepLine, {[styles.filled]: filled})}></div>
        <div className={cls(styles.step, {[styles.filled]: filled})}>{number}</div>
        <div className={cls(styles.stepLine, {[styles.filled]: filled})}></div>
      </div>
    );
  };

  const endStep = () => {
    return (
      <div className={cls(styles.wrapper, styles.edgeStep)}>
        <div className={cls(styles.stepLine, {[styles.filled]: filled})}></div>
        <div className={cls(styles.step, {[styles.filled]: filled})}>{number}</div>
      </div>
    );
  }

  switch(position) {
    case STEP_POSITIONS.START:
      return startStep();

    case STEP_POSITIONS.END:
      return endStep();

    case STEP_POSITIONS.MIDDLE:
    default:
      return middleStep();
  }
}

Step.defaultProps = {
  position: STEP_POSITIONS.MIDDLE
};

Step.propTypes = {
  filled: PropTypes.bool,
  position: PropTypes.oneOf(Object.values(STEP_POSITIONS)),
  number: PropTypes.number
};

export default Step;
