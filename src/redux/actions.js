import {createAction} from "@reduxjs/toolkit";

export const addContact = createAction('AddContact')
export const deleteContact = createAction('DeleteContact')

export const addFilter = createAction('addFilter')