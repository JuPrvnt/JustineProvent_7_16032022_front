import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import Modal, { ModalBody, ModalBackground } from "../Modal/Modal.jsx";
import logo from "../../assets/header-logo-white.svg";
import "./_Header.scss";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gpm-header">
      <img src={logo} alt="Groupomania" className="gpm-logo" />
      <div className="gpm-text-header">
        <p className="gpm-connection">Connexion</p>
        <Button onClick={() => setShowModal(true)}>S'inscrire</Button>
        <Modal show={showModal}>
          <ModalBody></ModalBody>
          <ModalBackground></ModalBackground>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
