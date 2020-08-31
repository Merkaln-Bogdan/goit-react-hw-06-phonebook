import React from "react";
import style from "./PhoneBook.module.css";
import PhonebookEditor from "./PhonebookEditor";
import Filter from "../Filter/Filter";
import AlertWindow from "../AlertWindow/AlertWindow";
import PhonebookListItem from "../PhonebookListItem/PhoneBookListItem";
import slideTransition from "../../stylesTransition/PhonebookListSlide.module.css";
import alertSlideTransition from "../../stylesTransition/AlertTransition.module.css";
import PhoneFilter from "../../stylesTransition/PhoneFilter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import taskPhonebook from "../redux/TaskPhonebook";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Phonebook({ contacts, onRemovePersonData }) {
  return (
    <>
      <div className={style.phoneList}>
        <h2>Контакты</h2>
        <CSSTransition
          in={false}
          timeout={250}
          classNames={alertSlideTransition}
          unmountOnExit
        >
          <AlertWindow />
        </CSSTransition>
        <PhonebookEditor />
        {contacts.length > 0 ? (
          <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            classNames={PhoneFilter}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>
        ) : (
          <h2>No contacts</h2>
        )}
        <TransitionGroup component="ul" className={style.contactList}>
          {contacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={300}
              classNames={slideTransition}
            >
              <PhonebookListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onRemovePersonData={() => onRemovePersonData(contact.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
}
const MapStateToProps = (state) => {
  const { contactAddReduser, filter } = state.actions;
  const visibleContacts = contactAddReduser.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return {
    state,
    contacts: visibleContacts,
  };
};
const MapDispatchToProps = {
  onRemovePersonData: taskPhonebook.onRemovePersonData,
};
export default connect(MapStateToProps, MapDispatchToProps)(Phonebook);

Phonebook.propTypes = {
  contacts: PropTypes.array,
  onRemovePersonData: PropTypes.func,
};
