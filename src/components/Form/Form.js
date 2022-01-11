import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

export default function Form({ onSubmitContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid(10);
    const newContact = { id, name, number };
    onSubmitContact(newContact);
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="name">
          Name:
        </label>
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="number">
          Phone:
        </label>
        <input
          className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmitContact: PropTypes.func.isRequired,
};
