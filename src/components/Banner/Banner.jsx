import "../Banner/Banner.scss";
import logo from "./banner-logo-white.svg";

function Banner() {
  return (
    <div className="gpm-banner">
      <img src={logo} alt="Groupomania" className="gpm-logo" />
      <h1 className="gpm-title">Le réseau social de Groupomania</h1>
      <p>Salut le test</p>
    </div>
  );
}

export default Banner;
