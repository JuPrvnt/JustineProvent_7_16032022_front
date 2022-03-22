import React from "react";
import Axios from "axios";
import Home from "./components/Home/Home";
import "./_App.scss";

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
      <Home></Home>
    </div>
  );
}

export default App;
