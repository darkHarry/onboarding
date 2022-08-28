import React from 'react';

import Button from 'src/app/components/Button';
import Input from 'src/app/components/FormElements/Input';
import RadioCard from 'src/app/components/FormElements/RadioCard';

import personIcon from 'src/public/person.svg';
import peopleIcon from 'src/public/people.svg';

import { WORKSPACE_USE } from 'src/lib/constants';

import styles from './form.css';

function UseCaseForm(props) {
  const { data, setData, onNext } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onNext === 'function') {
      onNext();
    }
  };

  const handleChange = (e) => {
    console.log(e);
    /*
    if (e.target.id === "username") {
      setData(_data => ({ ..._data, userName: value }));
    } else if (e.target.id === "displayname") {
      setData(_data => ({ ..._data, displayName: value }));
    }
    */
  };

  const handleClick = (useCaseValue) => {
    return () => {
      setData(_data => ({ ..._data, useCase: useCaseValue }));
    };
  };

  return (
    <>
      <h1 className={styles.title}>How are you planning to use Eden?</h1>
      <h4 className={styles.subTitle}>We'll streamline your setup experience accordingly</h4>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.radioContainer}>
            <Input.Label inputId="selfuse">
              <Input 
                className={styles.radioInput} 
                type="radio" 
                id="selfuse" 
                name="usecase" 
                value={WORKSPACE_USE.SELF} 
                checked={data.useCase === WORKSPACE_USE.SELF} 
                onChange={handleChange} 
              />
              <RadioCard 
                onClick={handleClick(WORKSPACE_USE.SELF)} 
                iconSrc={personIcon} 
                title="For myself" 
                text="Write Better. Think more clearly. Stay organized." 
              />
            </Input.Label>
            <Input.Label inputId="multiuse">
              <Input 
                className={styles.radioInput} 
                type="radio" 
                id="multiuse" 
                name="usecase" 
                value={WORKSPACE_USE.MULTI} 
                checked={data.useCase === WORKSPACE_USE.MULTI} 
                onChange={handleChange} 
              />
              <RadioCard 
                onClick={handleClick(WORKSPACE_USE.MULTI)} 
                iconSrc={peopleIcon} 
                title="With my team" 
                text="Wikis, docs, tasks & projects, all in one place" 
              />
            </Input.Label>
        </div>
        <Button type="submit" label="Next" />
      </form>
    </>
  );
}

export default UseCaseForm;
