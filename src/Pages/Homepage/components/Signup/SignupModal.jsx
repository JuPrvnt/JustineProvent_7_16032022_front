import React from "react";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./_SignupModal.scss";

const SignupModal = () => {
  // register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigate
  const navigate = useNavigate();

  // connexion avec le back
  const onSubmit = (data) => {
    ConnectionAPI.signup({
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin,
    })
      .then((res) => {
        let token = res.data.token;
        let userInfo = JSON.stringify(res.data);
        localStorage.setItem("Token", token);
        localStorage.setItem("userInfo", userInfo);
        navigate("/connected");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="modal-body">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          <p className="gpm-title-form">Mon NOM :</p>
        </label>
        <input
          className="gpm-input-form"
          {...register("lastName", {
            required: true,
          })}
        />
        <br />
        <label>
          <p className="gpm-title-form">Mon Prénom :</p>
        </label>
        <input
          className="gpm-input-form"
          {...register("firstName", {
            required: true,
          })}
        />
        <br />
        <label>
          <p className="gpm-title-form">Mon adresse email :</p>
        </label>
        <input
          className="gpm-input-form"
          {...register("email", {
            required: true,
          })}
        />
        <br />
        <label>
          <p className="gpm-title-form">Mon mot de passe</p>
        </label>
        <input
          className="gpm-input-form"
          type="password"
          {...register("password", {
            required: true,
            pattern: {
              value: /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,64})$/,
              message:
                "Votre mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <div className="gpm-form-role">
          <input type="checkbox" value="1" className="gpm-input-isAdmin" />
          <label>Chargé(e) de communication</label>
        </div>
        <button type="submit" className="gpm-button-form">
          Je m'inscris
        </button>
      </form>
      <div className="modal-background"></div>
    </div>
  );
};
export default SignupModal;
