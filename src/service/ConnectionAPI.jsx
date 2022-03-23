import axios from "axios";

class ConnectionAPI {
  static signup(user) {
    return axios.post("http://localhost:3000/signup", user);
  }
}

export default ConnectionAPI;
