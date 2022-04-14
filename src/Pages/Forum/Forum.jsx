import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ConnectionAPI from "../../service/ConnectionAPI";
import { useNavigate } from "react-router";
import forumimage from "../../assets/connexion-image.jpg";
import iconphoto from "../../assets/picture-icon.png";
import iconpost from "../../assets/advertising-icon.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./_Forum.scss";

const Forum = () => {
  const [post, setPost] = useState();
  const [file, setFile] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const logout = () => {
    ConnectionAPI.logout();
    localStorage.removeItem("userInfo");
    localStorage.removeItem("Token");
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log(data);
    ConnectionAPI.createPost({
      content: data.content,
      imageUrl: data.imageUrl,
    })
    .catch((error) => console.log(error));
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="gpm-post-content"
                  type="textarea"
                  placeholder="Quoi de neuf ?"
                  {...register("content", {
                    required: true,
                  })}
                />
                <div className="gpm-icon-photo">
                  <div className="gpm-icons-buttons">
                    <img className="gpm-icon" src={iconphoto} alt="icon" />
                    <input
                      className="gpm-text-photo"
                      type="file"
                      accept="image/*"
                      {...register("imageUrl", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="gpm-button-post">
                    <img className="gpm-icon" src={iconpost} alt="post" />
                    <button type="submit" className="gpm-text-post">
                      Publier
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="gpm-posted"></div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
