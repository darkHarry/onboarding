import React from 'react';

import Input from 'src/app/components/FormElements/Input';
import Button from 'src/app/components/Button';

import styles from './form.css';

function UserForm() {
  return (
    <>
      <h1 className={styles.title}>Welcome! First things first...</h1>
      <h4 className={styles.subTitle}>You can always change them later</h4>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Input.Label inputId="username" labelText="Full Name" />
          <Input type="text" id="username" name="name" required autoFocus />
        </div>
        <div className={styles.inputContainer}>
          <Input.Label inputId="displayname" labelText="Display Name" />
          <Input type="text" id="displayname" name="displayName" required />
        </div>
        <Button label="Next" />
      </form>
    </>
  );
}

export default UserForm;
