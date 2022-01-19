import { createSlice, combineReducers } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      return [payload, ...state];
    },
    deleteContact(state, { payload }) {
      return [...state].filter(({ id }) => id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

const { addContact, deleteContact } = itemsSlice.actions;
const { setFilter } = filterSlice.actions;

export const actions = {
  addContact,
  deleteContact,
  setFilter,
};

export const contactsReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});
