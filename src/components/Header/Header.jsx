import React, { useState } from "react";
import Button from "../Button/Button.jsx";
import Modal, { ModalContent } from "../Modal/Modal.jsx";
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
          <ModalContent>
            <div className="button-modal" onClick={() => setShowModal(false)}>
              S'inscrire
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
