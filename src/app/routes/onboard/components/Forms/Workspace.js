import React from 'react';

import Input from 'src/app/components/FormElements/Input';
import Button from 'src/app/components/Button';

import globalStyles from 'src/global.css';
import styles from './form.css';

import { WORKSPACE_DOMAIN } from 'src/lib/constants';

function WorkspaceForm(props) {
  const { data, setData, onNext } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onNext === 'function') {
      onNext();
    }
  };

  const handleChange = (value, e) => {
    if (e.target.id === "workspace") {
      setData(_data => ({ ..._data, workspaceName: value }));
    } else if (e.target.id === "workspaceurl") {
      setData(_data => ({ ..._data, workspaceUrl: `${WORKSPACE_DOMAIN}${value}` }));
    }
  };

  return (
    <>
      <h1 className={styles.title}>Let's set up a home for all your work</h1>
      <h4 className={styles.subTitle}>You can always create another workspace later</h4>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Input.Label inputId="workspace" labelText="Workspace Name" />
          <Input type="text" id="workspace" name="workspaceName" required autoFocus onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <Input.Label inputId="workspaceurl">
            Workspace URL<span className={globalStyles.secondaryTextLight}> (optional)</span>
          </Input.Label>
          <Input type="text" id="workspaceurl" name="workspaceUrl" adornment={WORKSPACE_DOMAIN} required />
        </div>
        <Button type="submit" label="Next" />
      </form>
    </>
  );
}

export default WorkspaceForm;
