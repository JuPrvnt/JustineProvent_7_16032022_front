import React from "react";
import SignUpForm from "../../../components/SignupForm/SignupForm";
import "./_SignupModal.scss";

const SignupModal = (props) => {
  return (
    <div className={`modal ${props.show ? "active" : ""} transparancy`}>
      <div>{props.children}</div>
    </div>
  );
};

export default SignupModal;

export const SignupModalBody = (props) => {
  return (
    <div className="modal-body">
      {props.children}
      <SignUpForm></SignUpForm>
    </div>
  );
};

export const SignupModalBackground = (props) => {
  return <div className="modal-background">{props.children}</div>;
};
