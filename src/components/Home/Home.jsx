import React from "react";
import Banner from "../Banner/Banner";
import homepageimage from "../../assets/homepage-image.jpg";
import "../Home/_Home.scss";

function Home() {
  return (
    <div className="Home">
      <Banner></Banner>
      <div className="gpm-background-banner">
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
    </div>
  );
}

export default Home;
