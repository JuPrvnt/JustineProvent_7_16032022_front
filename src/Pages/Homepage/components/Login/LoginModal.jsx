import React from "react";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./LoginModal.scss";

const LoginModal = () => {
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
        setErrorData("Aucun compte n'est associé à cette adresse mail.");
      });
  };

  return (
    <div className="login-modal-body">
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
              message: "Le mot de passe est incorrect.",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type="submit" className="gpm-button-form">
          Je me connecte
        </button>
        <span className="error-message">{errorData}</span>{" "}
      </form>
      <div className="login-modal-background"></div>
    </div>
  );
};
export default LoginModal;
