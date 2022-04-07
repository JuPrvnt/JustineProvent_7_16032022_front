import axios from "axios";

// const token = localStorage.getItem("token");

const API_URL = "http://localhost:3000/";

class ConnectionAPI {
  static signup(user) {
    return axios.post(API_URL + "signup", user);
  }
  static login(user) {
    return axios.post(API_URL + "login", user);
  }
  static logout(user) {
    return axios.get(API_URL + "logout", user);
  }
  static getOneUser() {
    return axios.get(API_URL + ":id");
    // return axios.get(API_URL + "user" + `${token}`);
  }
}

export default ConnectionAPI;
