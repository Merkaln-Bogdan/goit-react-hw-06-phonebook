import React from "react";
import styleAlert from "./AlertWindow.module.css";

const AlertWindow = () => {
  return (
    <div className={styleAlert.Alert}>
      <span className={styleAlert.AlertMessage}>
        Номер с таким именем уже существует!
      </span>
    </div>
  );
};
export default AlertWindow;
