import React from "react";
import Signup from "./Signup";
import Inscription from "../Log/SignupForm";
import "./_Modal.scss";

const Modal = (props) => {
  return (
    <div className={`modal ${props.show ? "active" : ""} transparancy`}>
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;

export const ModalBody = (props) => {
  return (
    <div className="modal-body">
      {props.children}
      <Inscription></Inscription>
    </div>
  );
};

export const ModalBackground = (props) => {
  return <div className="modal-background">{props.children}</div>;
};
