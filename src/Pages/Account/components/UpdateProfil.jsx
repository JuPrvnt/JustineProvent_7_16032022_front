import React from "react";
import ConnectionAPI from "../../../service/ConnectionAPI";
import { useForm } from "react-hook-form";
import "./_UpdateProfil.scss";

const UpdateProfil = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const firstNameUser = userInfo.firstName;
  const lastNameUser = userInfo.lastName;
  const email = userInfo.email;
  const id = userInfo.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // connexion avec le back
  const onSubmit = (data) => {
    ConnectionAPI.updateProfil({
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        let userInfo = JSON.stringify(res.data.user);
        localStorage.setItem("userInfo", userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="gpm-account">
      <form className="gpm-form-account">
        <label>
          <p className="gpm-title-account">Mon NOM :</p>
        </label>
        <input className="gpm-input-account" placeholder={lastNameUser} />
        <br />
        <label>
          <p className="gpm-title-account">Mon Prénom :</p>
        </label>
        <input className="gpm-input-account" placeholder={firstNameUser} />
        <br />
        <label>
          <p className="gpm-title-account">Mon adresse email :</p>
        </label>
        <input className="gpm-input-account" placeholder={email} />
        <br />
        <label>
          <p className="gpm-title-account">Mon mot de passe</p>
        </label>
        <input className="gpm-input-account" placeholder={lastNameUser} />
        <br />
        <input type="submit" value="Modifier" className="gpm-button-account" />
        <input type="submit" value="Supprimer" className="gpm-button-account" />
      </form>
    </div>
  );
};

export default UpdateProfil;
