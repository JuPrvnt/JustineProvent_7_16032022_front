import axios from "axios";

Axios({
  method: "GET",
  url: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => {
  console.log(res.data.message);
});

export const signup = (user) => {
  return axios.post("http://localhost:3000/signup", user);
};
