import React from 'react';

import Button from 'src/app/components/Button';
import Input from 'src/app/components/FormElements/Input';
import RadioCard from 'src/app/components/FormElements/RadioCard';

import personIcon from 'src/public/person.svg';
import peopleIcon from 'src/public/people.svg';

import { WORKSPACE_USE } from 'src/lib/constants';

import styles from './form.css';

function UseCaseForm() {
  return (
    <>
      <h1 className={styles.title}>How are you planning to use Eden?</h1>
      <h4 className={styles.subTitle}>We'll streamline your setup experience accordingly</h4>
      <form className={styles.formContainer}>
        <div className={styles.radioContainer}>
            <Input.Label inputId="selfuse">
              <Input className={styles.radioInput} type="radio" id="selfuse" name="usecase" value={WORKSPACE_USE.SELF} />
              <RadioCard iconSrc={personIcon} title="For myself" text="Write Better. Think more clearly. Stay organized." />
            </Input.Label>
            <Input.Label inputId="multiuse">
              <Input className={styles.radioInput} type="radio" id="multiuse" name="usecase" value={WORKSPACE_USE.MULTI} />
              <RadioCard iconSrc={peopleIcon} title="With my team" text="Wikis, docs, tasks & projects, all in one place" />
            </Input.Label>
        </div>
        <Button label="Next" />
      </form>
    </>
  );
}

export default UseCaseForm;
