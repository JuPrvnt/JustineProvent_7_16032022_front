import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App.jsx";
import SignupModal from "./Pages/1.Log/SignupModal/SignupModal";
import LoginModal from "./Pages/1.Log/LoginModal/LoginModal";
import Forum from "./Pages/3.Forum/Forum.jsx";
import Account from "./Pages/4.Account/Account.jsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signupmodal" element={<SignupModal />} />
        <Route path="/loginmodal" element={<LoginModal />} />
        <Route path="/connected" element={<Forum />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
