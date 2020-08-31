import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
// import actionTypes from "./ContactsActionsType/ContactsActionsType";
const addContacts = createAction("contact/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const onRemovePersonData = createAction("contact/remove");
const changeFilter = createAction("contact/filter");
// const onRemovePersonData = (id) => ({
//   type: actionTypes.REMOVE,
//   payload: { id },
// });
// const changeFilter = (filter) => ({
//   type: actionTypes.FILTER,
//   payload: { filter },
// });
export default {
  addContacts,
  onRemovePersonData,
  changeFilter,
};
