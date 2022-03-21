import React from "react";
import Axios from "axios";
import "./_App.scss";
import Banner from "../components/Banner/Banner.jsx";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:4000/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data.message);
  });
  return (
    <div className="App">
      <Banner></Banner>
    </div>
  );
}

export default App;
