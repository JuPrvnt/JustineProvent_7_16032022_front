import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import profileimage from "../../assets/my-profile-image.jpg";
import ConnectionAPI from "../../service/ConnectionAPI";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./_Profile.scss";

const Profile = () => {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const logout = () => {
    ConnectionAPI.logout();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("Token");
    navigate("/");
  };

  useEffect(() => {
    ConnectionAPI.getOneUser()
      .then((res) => {
        setLastName(res.data.lastName);
        setFirstName(res.data.firstName);
        setEmail(res.data.email);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="gpm-forum-header">
        <Header></Header>
        <div className="gpm-text-header">
          <Link to="/connected">
            <p className="gpm-text-forum">Forum</p>
          </Link>
          <Link to="/profile">
            <p className="gpm-text-forum">Mon compte</p>
          </Link>
          <button
            className="gpm-button"
            onClick={logout}
            action={"Déconnexion"}
          >
            Déconnexion
          </button>{" "}
        </div>
      </div>
      <div className="gpm-profile-background">
        <div className="gpm-profile">
          <form className="gpm-form-profile">
            <label>
              <p className="gpm-title-profile" placeholder={lastName}>
                Mon NOM : {lastName}
              </p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <label>
              <p className="gpm-title-profile" placeholder={firstName}>
                Mon Prénom :
              </p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <label>
              <p className="gpm-title-profile" placeholder={email}>
                Mon adresse email :
              </p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <label>
              <p className="gpm-title-profile">Mon mot de passe</p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <input
              type="submit"
              value="Modifier"
              className="gpm-button-profile"
            />
            <input
              type="submit"
              value="Supprimer"
              className="gpm-button-profile"
            />
          </form>
        </div>
        <div className="gpm-profile-white"></div>
        <img className="gpm-image-profile" src={profileimage} alt="profile" />
      </div>
    </div>
  );
};

export default Profile;
