import React from "react";
import "./_UpdateProfil.scss";

const UpdateProfil = (props) => {
  const { user } = props;

  return (
    <div>
      <div>{user._id}</div>
      <div>{user.lastName}</div>
      <div>{user.firstName}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UpdateProfil;
