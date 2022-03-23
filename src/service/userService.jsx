const axios = require("axios").default;

axios
  .post("/signup", {
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: "",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
