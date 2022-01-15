import { createAction } from '@reduxjs/toolkit';

export const getNewContact = createAction('contacts/add');
export const removeContact = createAction('contacts/delete');
