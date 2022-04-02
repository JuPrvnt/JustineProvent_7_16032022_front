import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Forum from "./Pages/Forum/Forum.jsx";
import Account from "./Pages/Account/Account.jsx";
import "./_App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connected" element={<Forum />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
