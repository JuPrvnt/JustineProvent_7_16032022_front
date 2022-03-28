import React from "react";
import logo from "../../assets/header-logo-white.svg";
import "./_Header.scss";

function Header() {
  return (
    <div className="gpm-header">
      <img src={logo} alt="Groupomania" className="gpm-logo" />
    </div>
  );
}

export default Header;
