import React from 'react';

import Button from 'src/app/components/Button';

import styles from './form.css';

function UseCaseForm() {
  return (
    <>
      <h1 className={styles.title}>How are you planning to use Eden?</h1>
      <h4 className={styles.subTitle}>We'll streamline your setup experience accordingly</h4>
      <form className={styles.formContainer}>
        <Button label="Next" />
      </form>
    </>
  );
}

export default UseCaseForm;
