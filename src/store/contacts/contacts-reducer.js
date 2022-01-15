import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getNewContact, removeContact } from './contacts-actions';

const items = createReducer([], {
  [getNewContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    [...state].filter(({ id }) => id !== payload),
});

export default combineReducers({
  items,
});
