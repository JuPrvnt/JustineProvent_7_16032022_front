import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import "../Button/_Button.scss";

function Button() {
  return (
    <Router>
      <div className="gpm-button">
        <Link to="/Signup">S'inscrire</Link>
      </div>
      <Routes>
        <Route path="/signup" element={Signup} />
      </Routes>
    </Router>
  );
}

export default Button;

/*
<div className="gpm-button">
<p>S'inscrire</p>
</div>
*/
