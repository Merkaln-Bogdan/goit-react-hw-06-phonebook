import React from "react";
import style from "../Phonebook/PhoneBook.module.css";
import { connect } from "react-redux";
import taskPhonebook from "../redux/TaskPhonebook";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => (
  <div className={style.wrapperFilter}>
    <label className={style.labelMarkup}>
      Найти номер
      <input
        className={style.inputField}
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </label>
  </div>
);
const MapStateToProps = (state) => ({
  value: state.actions.filter,
});
const MapDispatchToProps = {
  onChangeFilter: taskPhonebook.changeFilter,
};
export default connect(MapStateToProps, MapDispatchToProps)(Filter);
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
