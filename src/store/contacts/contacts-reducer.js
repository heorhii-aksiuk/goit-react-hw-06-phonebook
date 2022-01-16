import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './contacts-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    [...state].filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
