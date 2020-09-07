import React from "react";
import style from "./PhoneBook.module.css";
import PhonebookEditor from "./PhonebookEditor";
import Filter from "../Filter/Filter";
import PhonebookListItem from "../PhonebookListItem/PhoneBookListItem";
import slideTransition from "../../stylesTransition/PhonebookListSlide.module.css";
import PhoneFilter from "../../stylesTransition/PhoneFilter.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import taskPhonebook from "../redux/TaskPhonebook";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Phonebook({ contacts, onRemovePersonData }) {
  localStorage.setItem("contacts", JSON.stringify(contacts));

  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  return (
    <>
      <div className={style.phoneList}>
        <h2>Контакты</h2>

        <PhonebookEditor />

        <CSSTransition
          in={getContacts.length > 1}
          timeout={250}
          classNames={PhoneFilter}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        {getContacts.length > 0 ? (
          <TransitionGroup component="ul" className={style.contactList}>
            {getContacts.map((contact) => (
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
        ) : (
          <h2>Нет контактов</h2>
        )}
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
