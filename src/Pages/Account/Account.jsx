import React from "react";
import Header from "../../components/Header/Header";
import UpdateProfil from "./components/UpdateProfil";
import accountimage from "../../assets/my-account-image.jpg";
import { Link } from "react-router-dom";
import "./_Account.scss";

const Account = () => {
  return (
    <div>
      <div className="gpm-forum-header">
        <Header></Header>
        <div className="gpm-text-header">
          <Link to="/connected">
            <p className="gpm-text-forum">Forum</p>
          </Link>
          <Link to="/account">
            <p className="gpm-text-forum">Mon compte</p>
          </Link>
          <button className="gpm-button">Déconnexion</button>
        </div>
      </div>
      <div className="gpm-account-background">
        <UpdateProfil></UpdateProfil>
        <div className="gpm-account-white"></div>
        <img className="gpm-image-account" src={accountimage} alt="account" />
      </div>
    </div>
  );
};

export default Account;
