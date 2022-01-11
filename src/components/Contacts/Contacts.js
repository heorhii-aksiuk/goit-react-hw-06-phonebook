import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export default function Contacts({ contacts, onRemoveClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id} name={name}>
            <p className={s.paragraph}>
              <span>{name}</span>
              <span>{number}</span>
            </p>
            <button
              className={s.button}
              onClick={() => onRemoveClick(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
