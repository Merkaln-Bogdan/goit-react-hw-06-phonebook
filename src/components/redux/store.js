import { configureStore } from "@reduxjs/toolkit";
import actionsReducers from "./ContactsReducer/ContactsReducer";
const store = configureStore({ reducer: { actions: actionsReducers } });
export default store;
