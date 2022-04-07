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
  const [user, getUser] = useState();
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");

  const navigate = useNavigate();

  const logout = () => {
    ConnectionAPI.logout();
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  useEffect(() => {
    displayOneUser();
  }, []);

  const displayOneUser = () => {
    ConnectionAPI.getOneUser()
      .then((res) => {
        const lastName = res.data.lastName;
        const firstName = res.data.firstName;
        const email = res.data.email;
        console.log(lastName);
        console.log(firstName);
        console.log(email);
      })
      .catch((error) => console.log(error));
  };

  displayOneUser();
  console.log(lastName);

  /*
  useEffect(() => {
    const displayOneUser = () => {
      ConnectionAPI.getOneUser()
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((error) => console.log(error));
    };

    displayOneUser();

  }, []);
  */

  return (
    <div>
      <div className="gpm-forum-header">
        <Header></Header>
        <div className="gpm-text-header">
          <Link to="/connected">
            <p className="gpm-text-forum">Forum</p>
          </Link>
          <Link to="/:id">
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
              <p className="gpm-title-profile">Mon NOM : {lastName}</p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <label>
              <p className="gpm-title-profile">Mon Prénom :</p>
            </label>
            <input className="gpm-input-profile" />
            <br />
            <label>
              <p className="gpm-title-profile">Mon adresse email :</p>
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
