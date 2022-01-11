import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={s.input}
        id="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
