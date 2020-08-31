import { combineReducers } from "redux";
// import contactsActionTypes from "../ContactsActionsType/ContactsActionsType";
import TaskPhonebook from "../TaskPhonebook";
import { createReducer } from "@reduxjs/toolkit";
const onAddContact = (state, action) => [...state, action.payload];
const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const contactAddReduser = createReducer([], {
  [TaskPhonebook.addContacts]: onAddContact,
  [TaskPhonebook.onRemovePersonData]: onRemoveContact,
});
// const contactAddReduser = (state = [], { type, payload }) => {
//   switch (type) {
//     case TaskPhonebook.addContacts.type:
//       return [...state, payload];
//     case TaskPhonebook.onRemovePersonData.type:
//       return state.filter((contact) => contact.id !== payload);
//     default:
//       return state;
//   }
// };

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case TaskPhonebook.changeFilter.type:
      return payload;
    default:
      return state;
  }
};
export default combineReducers({ contactAddReduser, filter });
