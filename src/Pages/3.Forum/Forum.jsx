import React, { Component } from "react";
import Header from "../../components/Header/Header";
import forumimage from "../../assets/connexion-image.jpg";
import iconphoto from "../../assets/picture-icon.png";
import iconpost from "../../assets/advertising-icon.png";
import { Link } from "react-router-dom";
import "./_Forum.scss";

class Forum extends Component {
  render() {
    return (
      <div className="gpm-block-red-forum">
        <div className="gpm-forum-header">
          <Header></Header>
          <div className="gpm-text-header">
            <Link to="/connected">
              <p className="gpm-text-forum">Forum</p>
            </Link>
            <Link to="/account">
              <p className="gpm-text-forum">Mon compte</p>
            </Link>
            <button className="gpm-button">Déconnexion</button>
          </div>
        </div>
        <div className="gpm-forum-background">
          <img className="gpm-forum-image" src={forumimage} alt="forum" />
          <div className="gpm-block-forum">
            <div className="gpm-to-post">
              <div className="gpm-header-to-post">
                <div className="gpm-letter-red">J</div>
                <div className="gpm-post-content"></div>
              </div>
              <div className="gpm-icons-buttons">
                <div className="gpm-icon-photo">
                  <img className="gpm-icon" src={iconphoto} alt="photo/vidéo" />
                  <p className="gpm-text-photo">Photo/vidéo</p>
                </div>
                <div className="gpm-button-post">
                  <img className="gpm-icon" src={iconpost} alt="post" />
                  <p className="gpm-text-post">Publier</p>
                </div>
              </div>
            </div>
            <div className="gpm-posted"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forum;