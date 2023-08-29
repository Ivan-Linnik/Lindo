import { useState } from 'react';

import styles from './Form.module.css';
import Button from './Button';

function Form({ createTodo }) {
  const [inputValue, setInputValue] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Type todo text');

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleFromSubmit(event) {
    event.preventDefault();

    if (!inputValue) {
      setPlaceholderText('Nothing to create');

      setTimeout(() => setPlaceholderText('Type todo text'), 2e3);
    } else {
      createTodo(inputValue);
    }

    setInputValue('');
  }

  return (
    <form className={styles.Form} onSubmit={handleFromSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={inputValue}
        onChange={handleInputValue}
        placeholder={placeholderText}
        autoComplete="off"
      />
      <Button type="submit">Create</Button>
    </form>
  );
}

export default Form;
