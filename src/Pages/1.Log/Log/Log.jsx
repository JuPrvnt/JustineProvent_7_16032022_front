import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import BackgroundHome from "../../../components/BackgroundHome/BackgroundHome";
import Button from "../../../components/Button/Button";
import SignupModal, {
  SignupModalBody,
  SignupModalBackground,
} from "../SignupModal/SignupModal";
import LoginModal, {
  LoginModalBody,
  LoginModalBackground,
} from "../LoginModal/LoginModal";
import "./_Log.scss";

function Log() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

  return (
    <div>
      <div className="gpm-log-header">
        <Header></Header>
        <div className="gpm-text-header">
          <p className="gpm-connexion" onClick={() => setShowModalLogin(true)}>
            Connexion
          </p>
          <LoginModal show={showModalLogin}>
            <LoginModalBody></LoginModalBody>
            <LoginModalBackground></LoginModalBackground>
          </LoginModal>
          <Button onClick={() => setShowModalSignUp(true)}>S'inscrire</Button>
          <SignupModal show={showModalSignUp}>
            <SignupModalBody></SignupModalBody>
            <SignupModalBackground></SignupModalBackground>
          </SignupModal>
        </div>
      </div>
      <BackgroundHome></BackgroundHome>
    </div>
  );
}

export default Log;
