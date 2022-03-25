import React, { Component } from "react";
import ConnectionAPI from "../../service/ConnectionAPI";
import "./_Signup.scss";

class Signup extends Component {
  onSignUp(user) {
    ConnectionAPI.signup(user);
  }

  render() {
    return (
      <button
        className="gpm-signup-button"
        onClick={() =>
          this.onSignUp({
            firstName: "Justine",
            lastName: "Provent",
            email: "justine.provent90@gmail.com",
            isAdmin: false,
          })
        }
      >
        S'inscrire
      </button>
    );
  }
}

export default Signup;
