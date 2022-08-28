import React, { useState } from 'react';

import ProgressStepper from 'src/app/components/ProgressStepper';

import { WORKSPACE_USE } from 'src/lib/constants';

import Forms from './components/Forms';

import styles from './onboard.css';

function onBoardPage() {
  /* All form data */
  const [formData, setFormData] = useState({
    userName: null,
    displayName: null,
    workspaceName: null,
    workspaceUrl: null,
    useCase: WORKSPACE_USE.SELF
  });

  /* Step finished till now */
  const [currentStep, setCurrentStep] = useState(1);
  const MAX_STEPS = 4; // Total Steps

  /* Handlers */
  const handleNextClick = () => {
    setCurrentStep(step => step+1);
  };

  /* Renderers */
  const renderForms = () => {
    const formIndex = currentStep-1;
    const Form = Forms[formIndex];
    return <Form data={formData} setData={setFormData} onNext={handleNextClick} />;
  };

  return (
    <div>
      <ProgressStepper stepNum={currentStep} stepsCount={MAX_STEPS} />
      <div className={styles.wrapper}>
        {renderForms()}
      </div>
    </div>
  );  
}

export default onBoardPage;
