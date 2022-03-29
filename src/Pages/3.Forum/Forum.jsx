import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./_Forum.scss";
import forumimage from "../../assets/connexion-image.jpg";

class Forum extends Component {
  render() {
    return (
      <div className="gpm-block-red-forum">
        <div className="gpm-forum-header">
          <Header></Header>
          <div className="gpm-text-header">
            <p className="gpm-text-forum">Forum</p>
            <p className="gpm-text-forum">Mon compte</p>
            <button className="gpm-button">Déconnexion</button>
          </div>
        </div>
        <div className="gpm-forum-background">
          <img className="gpm-forum-image" src={forumimage} alt="forum" />
          <div className="gpm-block-forum">
            <div className="gpm-to-post"></div>
            <div className="gpm-posted"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forum;
