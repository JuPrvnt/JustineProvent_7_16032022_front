import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Button/_Button.scss";

class Button extends Component {
  render() {
    return (
      <div className="gpm-button">
        <Link to="/Signup">S'inscrire</Link>
      </div>
    );
  }
}

export default Button;

/*
<div className="gpm-button">
<p>S'inscrire</p>
</div>
*/
