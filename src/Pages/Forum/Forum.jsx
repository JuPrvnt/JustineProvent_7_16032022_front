import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import forumimage from "../../assets/connexion-image.jpg";
import Header from "../../components/Header/Header";
import ConnectionAPI from "../../service/ConnectionAPI";
import PostCard from "./Components/PostCard";
import PostForm from "./Components/PostForm";
import "./Forum.scss";

const Forum = () => {
  const navigate = useNavigate();

  const [dataPosts, setDataPosts] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addnewpost = () => {
    window.location.reload();
  };

  return (
    <div className="gpm-block-red-forum">
      <>
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
            <PostForm addPost={addnewpost}></PostForm>
            <div className="gpm-posted-header">
              Voici votre fil d'actualités...
            </div>
            <ul className="gpm-posts-list">
              {dataPosts.map((post, i) => (
                <PostCard post={post} key={i} addPost={addnewpost}></PostCard>
              ))}
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Forum;
