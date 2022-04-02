import React, { useEffect } from "react";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_UpdateProfil.scss";

const UpdateProfil = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const lastName = userInfo.lastName;
  const firstName = userInfo.firstName;
  const email = userInfo.email;

  // connexion avec le back
  useEffect(() => {
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
    onSubmit();
  });

  return (
    <div className="gpm-account">
      <form className="gpm-form-account">
        <label>
          <p className="gpm-title-account">Mon NOM :</p>
        </label>
        <input className="gpm-input-account" placeholder={lastName} />
        <br />
        <label>
          <p className="gpm-title-account">Mon Prénom :</p>
        </label>
        <input className="gpm-input-account" placeholder={firstName} />
        <br />
        <label>
          <p className="gpm-title-account">Mon adresse email :</p>
        </label>
        <input className="gpm-input-account" placeholder={email} />
        <br />
        <label>
          <p className="gpm-title-account">Mon mot de passe</p>
        </label>
        <input className="gpm-input-account" placeholder={lastName} />
        <br />
        <input type="submit" value="Modifier" className="gpm-button-account" />
        <input type="submit" value="Supprimer" className="gpm-button-account" />
      </form>
    </div>
  );
};

export default UpdateProfil;
