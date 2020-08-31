import React from "react";
import PhoneBook from "./components/Phonebook/Phonebook";
import { CSSTransition } from "react-transition-group";
import style from "./components/Phonebook/PhoneBook.module.css";
import TitleSlideTransition from "./stylesTransition/TitleSlideTransition.module.css";

function App() {
  return (
    <div className={style.Wrapper}>
      <CSSTransition
        in
        appear
        timeout={1000}
        classNames={TitleSlideTransition}
        unmountOnExit
      >
        <h1 className={style.title}>Phonebook</h1>
      </CSSTransition>
      <PhoneBook />
    </div>
  );
}
export default App;
