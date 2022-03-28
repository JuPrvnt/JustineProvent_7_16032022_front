import React from "react";
import LoginForm from "../../../components/LoginForm/LoginForm";
import "./_LoginModal.scss";

const LoginModal = (props) => {
  return (
    <div className={`login-modal ${props.show ? "active" : ""} transparancy`}>
      <div>{props.children}</div>
    </div>
  );
};

export default LoginModal;

export const LoginModalBody = (props) => {
  return (
    <div className="login-modal-body">
      {props.children}
      <LoginForm></LoginForm>
    </div>
  );
};

export const LoginModalBackground = (props) => {
  return <div className="login-modal-background">{props.children}</div>;
};
