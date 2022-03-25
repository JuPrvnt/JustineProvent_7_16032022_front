import React from "react";
import "../Button/_Button.scss";

const Button = (props) => {
  return (
    <button className="gpm-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
