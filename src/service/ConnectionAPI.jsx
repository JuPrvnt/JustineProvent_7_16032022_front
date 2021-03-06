import axios from "axios";

const API_URL = process.env.REACT_APP_URL;
// const API_URL = "http://localhost:3000/";

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
    let dataSend = new FormData();
    dataSend.append("content", post.content);
    dataSend.append("image", post.image);

    return axios.post(API_URL + "post", dataSend, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static getAllPosts() {
    const token = localStorage.getItem("Token");

    return axios.get(API_URL + "post", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static deletePost() {
    const token = localStorage.getItem("Token");

    return axios.delete(API_URL + "post", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static createComment(comment) {
    const token = localStorage.getItem("Token");
    let dataSend = new FormData();
    dataSend.append("content", comment.content);
    dataSend.append("postId", comment.postId);

    return axios.post(API_URL + "comment", dataSend, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static getAllComments(postId) {
    const token = localStorage.getItem("Token");

    return axios.get(API_URL + "comment", {
      params: {
        postId,
      },
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
  static deleteComment() {
    const token = localStorage.getItem("Token");

    return axios.delete(API_URL + "comment", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
  }
}
export default ConnectionAPI;
