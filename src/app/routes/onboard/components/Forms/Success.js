import React from 'react';

import tickIcon from 'src/public/tick.svg';
import Button from 'src/app/components/Button';

import styles from './form.css';

function SuccessForm(props) {
  const { data } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <img className={styles.successTick} src={tickIcon} role="presentation" alt="success tick" />
      <h1 className={styles.title}>Congratulations {`${data.displayName}`}!</h1>
      <h4 className={styles.subTitle}>You have completed onboarding, you can start using the Eden!</h4>
      <Button type="submit" label="Launch Eden" />
    </form>
  )
}

export default SuccessForm;
