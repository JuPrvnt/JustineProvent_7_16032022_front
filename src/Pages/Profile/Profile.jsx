import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import profileimage from "../../assets/my-profile-image.jpg";
import ConnectionAPI from "../../service/ConnectionAPI";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./_Profile.scss";

const Profile = () => {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();

  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data) => {
    const userInfo = localStorage.getItem("userInfo");
    data.userId = userInfo.id;

    ConnectionAPI.modifyUser(data)
      .then((res) => {
        let userInfo = JSON.stringify(res.data);
        localStorage.setItem("userInfo", userInfo);
      })
      .catch((error) => console.log(error));
  };

  const deleteUser = () => {
    ConnectionAPI.deleteUser()
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="gpm-form-profile">
            <label>
              <p className="gpm-title-profile">Mon NOM :</p>
            </label>
            <input
              type="text"
              placeholder={lastName}
              className="gpm-input-profile"
              {...register("lastName", {
                required: true,
              })}
            />
            <br />
            <label>
              <p className="gpm-title-profile">Mon Prénom :</p>
            </label>
            <input
              type="text"
              placeholder={firstName}
              className="gpm-input-profile"
              {...register("firstName", {
                required: true,
              })}
            />
            <br />
            <label>
              <p className="gpm-title-profile">Mon adresse email :</p>
            </label>
            <input
              type="text"
              placeholder={email}
              className="gpm-input-profile"
              {...register("email", {
                required: true,
                message: "Vous devez entrer une adresse mail valide",
              })}
            />
            <br />
            <input
              type="submit"
              value="Modifier"
              className="gpm-button-profile"
            />
            <button
              className="gpm-button-profile"
              onClick={deleteUser}
              action={"Suppression"}
            >
              Supprimer
            </button>{" "}
          </form>
        </div>
        <div className="gpm-profile-white"></div>
        <img className="gpm-image-profile" src={profileimage} alt="profile" />
      </div>
    </div>
  );
};

export default Profile;
