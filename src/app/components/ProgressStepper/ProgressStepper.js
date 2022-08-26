import React from 'react';
import PropTypes from 'prop-types';

import { STEP_POSITIONS } from 'src/lib/constants';

import Step from './Step';

function ProgressStepper(props) {
  const { stepNum, stepsCount } = props;
  // Force an integer
  const _stepsCount = parseInt(stepsCount);

  const filterStepNum = () => {
    let _num = stepNum;

    // if not an integer
    if (!Number.isInteger(stepNum)) _num = parseInt(stepNum);
    // set min value
    if(stepNum < 1) _num = 1;
    // set max value
    if (stepNum > stepsCount) _num = _stepsCount;

    return _num;
  };

  // Filter the step number
  const filteredStepNum = filterStepNum();

  // Render each step
  const renderSteps = () => {
    const x = [...Array(_stepsCount).keys()].map((_, index) => {
      if (index === 0) {
        return (
          <Step 
            position={STEP_POSITIONS.START} 
            number={index+1} 
            filled={index+1 <= filteredStepNum} 
            key={index+1}
          />
        );
      } else if (index+1 === _stepsCount) {
        return (
          <Step 
            position={STEP_POSITIONS.END} 
            number={index+1} 
            filled={index+1 <= filteredStepNum} 
            key={index+1}
          />
        );
      }

      return (
        <Step 
          number={index+1} 
          filled={index+1 <= filteredStepNum}
          key={index+1}
        />
      );
    });
    console.log(x);
    return x;
  };

  return (
    <div className={styles.container}>
      {renderSteps()}
    </div>
  )
}

ProgressStepper.propTypes = {
  stepNum: PropTypes.number, // Indicates current step number
  stepsCount: PropTypes.number
};

export default ProgressStepper;
