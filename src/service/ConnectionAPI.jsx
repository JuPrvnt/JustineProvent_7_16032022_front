import axios from "axios";

class ConnectionAPI {
  static signup(user) {
    return axios.post("http://localhost:3000/signup", user);
  }
  static login(user) {
    return axios.post("http://localhost:3000/login", user);
  }
  static logout(user) {
    return axios.get("http://localhost:3000/logout", user);
  }
  static updateProfil(user) {
    return axios.get("http://localhost:3000/logout", user);
  }
}

export default ConnectionAPI;
