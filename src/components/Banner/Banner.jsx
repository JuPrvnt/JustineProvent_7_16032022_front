import React from "react";
import Button from "../Button/Button.jsx";
import logo from "../../assets/banner-logo-white.svg";
import "../Banner/_Banner.scss";

function Banner() {
  return (
    <div className="gpm-banner">
      <img src={logo} alt="Groupomania" className="gpm-logo" />
      <div className="gpm-text-banner">
        <p className="gpm-connection">Connexion</p>
        <Button></Button>
      </div>
    </div>
  );
}

export default Banner;
