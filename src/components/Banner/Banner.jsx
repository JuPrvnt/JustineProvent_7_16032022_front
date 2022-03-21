import "../Banner/_Banner.scss";
import Button from "../Button/Button.jsx";
import logo from "./banner-logo-white.svg";

function Banner() {
  return (
    <div className="gpm-banner">
      <img src={logo} alt="Groupomania" className="gpm-logo" />
      <div className="gpm-text-banner">
        <p className="gpm-connection">Connexion</p>
        <Button></Button>
      </div>
    </div>
  );
}

export default Banner;
