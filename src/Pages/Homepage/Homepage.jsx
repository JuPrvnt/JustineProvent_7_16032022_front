import React, { useState } from "react";
import Header from "../../components/Header/Header";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome";
import Button from "../../components/Button/Button";
import SignupModal from "./components/Signup/SignupModal";
import LoginModal from "./components/Login/LoginModal";
import Modal from "../../components/Modal/Modal";
import "./Homepage.scss";

const Homepage = () => {
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
          <Modal show={showModalLogin}>
            <LoginModal></LoginModal>
          </Modal>
          <Button onClick={() => setShowModalSignUp(true)}>S'inscrire</Button>
          <Modal show={showModalSignUp}>
            <SignupModal></SignupModal>
          </Modal>
        </div>
      </div>
      <BackgroundHome></BackgroundHome>
    </div>
  );
};

export default Homepage;
