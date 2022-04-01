import React from "react";
import logo from "../../assets/header-logo-white.svg";
import { Link } from "react-router-dom";
import "./_Header.scss";

const Header = () => {
  return (
    <div className="gpm-header">
      <Link to="/" className="gpm-logo">
        <img src={logo} alt="Groupomania" className="gpm-logo" />
      </Link>
    </div>
  );
};

export default Header;
