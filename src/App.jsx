import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Forum from "./Pages/Forum/Forum.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/connected" element={<Forum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modify" element={<Profile />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
