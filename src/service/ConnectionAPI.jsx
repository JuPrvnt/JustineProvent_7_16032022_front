import axios from "axios";

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
  static getOneUser(user) {
    return axios.get(API_URL + "user", user);
  }
}

export default ConnectionAPI;
