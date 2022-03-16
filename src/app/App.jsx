import "./App.css";
import Banner from "../components/Banner/Banner.jsx";
import logo from "../assets/banner-logo-white.svg";

function App() {
  return (
    <div className="App">
      <Banner>
        <img src={logo} alt="Groupomania" className="gpm-logo" />
        <h1 className="gpm-title">Le réseau social de Groupomania</h1>
      </Banner>
    </div>
  );
}

export default App;
