import React, { Component } from "react";
import Home from "./components/Home/Home";
import "./_App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
