import React, { Component } from "react";
import homepageimage from "../../assets/homepage-image.jpg";
import "./BackgroundHome.scss";

class BackgroundHome extends Component {
  render() {
    return (
      <div className="gpm-background-home">
        <p className="gpm-title-part1">Échangez, partagez, rigolez,</p>
        <p className="gpm-title-part2">quand vous voulez</p>
        <div className="gpm-block-flex">
          <img
            className="gpm-homepage-image"
            src={homepageimage}
            alt="homepage"
          />
          <div className="gpm-block-red"></div>
          <div className="gpm-block-pink"></div>
        </div>
      </div>
    );
  }
}

export default BackgroundHome;
