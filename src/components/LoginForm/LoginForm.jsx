import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./_LoginForm.scss";

const LoginForm = () => {
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

  // axios
  const onSubmit = (data) => {
    axios({
      method: "POST",
      url: `http://localhost:3000/login`,
      data: {
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        let token = res.data.token;
        let userInfo = JSON.stringify(res.data);
        localStorage.setItem("Token", token);
        localStorage.setItem("userInfo", userInfo);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorData(
          "Vous êtes déjà inscrit à cette adresse mail, connectez-vous !"
        );
      });
  };

  return (
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
      <Link to="/connected">
        <input type="submit" value="Je m'inscris" className="gpm-button-form" />
      </Link>
      <span className="error-message">{errorData}</span>{" "}
    </form>
  );
};

export default LoginForm;
