import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import forumimage from "../../assets/connexion-image.jpg";
import Header from "../../components/Header/Header";
import ConnectionAPI from "../../service/ConnectionAPI";
import Post from "./Components/Post";
import "./_Forum.scss";

const Forum = () => {
  const { register, handleSubmit } = useForm();
  const [dataPosts, setDataPosts] = useState([]);

  const navigate = useNavigate();

  const logout = () => {
    ConnectionAPI.logout();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("Token");
    navigate("/");
  };

  useEffect(() => {
    ConnectionAPI.getAllPosts()
      .then((res) => {
        setDataPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="gpm-block-red-forum">
      <div className="gpm-forum-header">
        <Header></Header>
        <div className="gpm-text-header">
          <Link to="/connected">
            <p className="gpm-text-forum">Forum</p>
          </Link>
          <Link to="/profile">
            <p className="gpm-text-forum">Mon compte</p>
          </Link>
          <button
            className="gpm-button"
            onClick={logout}
            action={"Déconnexion"}
          >
            Déconnexion
          </button>
        </div>
      </div>
      <div className="gpm-forum-background">
        <img className="gpm-forum-image" src={forumimage} alt="forum" />
        <div className="gpm-block-forum">
          <div className="gpm-to-post">
            <div className="gpm-header-to-post">
              <Post></Post>
              <div className="gpm-forum-posts">
                {Array.isArray(dataPosts)
                  ? dataPosts.map((post, i) => (
                      <div key={i}>{post.content}</div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
