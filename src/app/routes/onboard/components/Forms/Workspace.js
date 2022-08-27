import React from 'react';

import Input from 'src/app/components/FormElements/Input';
import Button from 'src/app/components/Button';

import globalStyles from 'src/global.css';
import styles from './form.css';

function WorkspaceForm() {
  return (
    <>
      <h1 className={styles.title}>Let's set up a home for all your work</h1>
      <h4 className={styles.subTitle}>You can always create another workspace later</h4>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Input.Label inputId="workspace" labelText="Workspace Name" />
          <Input type="text" id="workspace" name="workspaceName" required autoFocus />
        </div>
        <div className={styles.inputContainer}>
          <Input.Label inputId="workspaceurl">
            Workspace URL<span className={globalStyles.secondaryTextLight}> (optional)</span>
          </Input.Label>
          <Input type="text" id="workspaceurl" name="workspaceUrl" adornment="www.eden.com/" required />
        </div>
        <Button label="Next" />
      </form>
    </>
  );
}

export default WorkspaceForm;
