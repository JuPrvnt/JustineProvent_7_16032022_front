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
  static getOneUser() {
    const token = localStorage.getItem("Token");

    return axios.get(API_URL, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static modifyUser(user) {
    const token = localStorage.getItem("Token");

    return axios.put(API_URL, user, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  static deleteUser() {
    const token = localStorage.getItem("Token");

    return axios.delete(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  static createPost(post) {
    const token = localStorage.getItem("Token");

    return axios.post(API_URL + "post", post, {
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  }
}

export default ConnectionAPI;
