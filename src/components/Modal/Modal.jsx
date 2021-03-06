import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className={`modal ${props.show ? "active" : ""} transparancy`}>
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
