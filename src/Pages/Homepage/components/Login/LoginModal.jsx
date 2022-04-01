import React from "react";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./_LoginModal.scss";

const LoginModal = (props) => {
  // useState
  const [errorData, setErrorData] = useState("");

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
    ConnectionAPI.login({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        let token = res.data.token;
        let userInfo = JSON.stringify(res.data);
        localStorage.setItem("Token", token);
        localStorage.setItem("userInfo", userInfo);
        navigate("/connected");
      })
      .catch((error) => {
        console.log(error);
        setErrorData(
          "Vous êtes déjà inscrit à cette adresse mail, connectez-vous !"
        );
      });
  };

  return (
    <div className="login-modal-body">
      {props.children}

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          <p className="gpm-title-form">Mon adresse email :</p>
        </label>
        <input
          className="gpm-input-form"
          {...register("email", {
            required: true,
            message: "Vous devez entrer une adresse mail valide",
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
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
        <input type="submit" value="Je m'inscris" className="gpm-button-form" />
        <span className="error-message">{errorData}</span>{" "}
      </form>

      <div className="login-modal-background">{props.children}</div>
    </div>
  );
};
export default LoginModal;
