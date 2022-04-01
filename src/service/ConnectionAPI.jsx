import axios from "axios";

class ConnectionAPI {
  static signup(user) {
    return axios.post("http://localhost:3000/signup", user);
  }
  static login() {
    return axios.post("http://localhost:3000/login");
  }
  static updateProfil() {
    return axios.post("http://localhost:3000/updateprofil");
  }
}

export default ConnectionAPI;
