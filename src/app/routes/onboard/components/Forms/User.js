import React from 'react';

import Input from 'src/app/components/FormElements/Input';
import Button from 'src/app/components/Button';

import styles from './form.css';

function UserForm(props) {
  const { data, setData, onNext } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onNext === 'function') {
      onNext();
    }
  };

  const handleChange = (value, e) => {
    if (e.target.id === "username") {
      setData(_data => ({ ..._data, userName: value }));
    } else if (e.target.id === "displayname") {
      setData(_data => ({ ..._data, displayName: value }));
    }
  };

  return (
    <>
      <h1 className={styles.title}>Welcome! First things first...</h1>
      <h4 className={styles.subTitle}>You can always change them later</h4>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Input.Label inputId="username" labelText="Full Name" />
          <Input type="text" id="username" name="name" required autoFocus onChange={handleChange}/>
        </div>
        <div className={styles.inputContainer}>
          <Input.Label inputId="displayname" labelText="Display Name" />
          <Input type="text" id="displayname" name="displayName" required onChange={handleChange} />
        </div>
        <Button type="submit" label="Next" />
      </form>
    </>
  );
}

export default UserForm;
