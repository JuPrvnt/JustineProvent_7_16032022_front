import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import iconphoto from "../../../assets/picture-icon.png";
import iconpost from "../../../assets/advertising-icon.png";
import ConnectionAPI from "../../../service/ConnectionAPI";
import Comment from "../Components/Comment";
import dayjs from "dayjs";
import "./_Post.scss";
require("dayjs/locale/fr");

const Post = () => {
  const { register, handleSubmit } = useForm();
  const [dataPosts, setDataPosts] = useState([]);
  const relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    ConnectionAPI.createPost({
      content: data.content,
      image: data.image[0],
    })
      .then((valueReturn) => {
        if (valueReturn.status == "201") {
          ConnectionAPI.getAllPosts()
            .then((res) => {
              setDataPosts(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ConnectionAPI.getAllPosts()
      .then((res) => {
        setDataPosts(res.data);
        navigate("/connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePost = () => {
    ConnectionAPI.deletePost()
      .then(() => {
        navigate("/connected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*
  const refreshPage = () => {
    window.location.reload(true);
  };
  */

  return (
    <div>
      <div className="gpm-to-post">
        <form onSubmit={handleSubmit(onSubmit)} className="gpm-header-to-post">
          <input
            className="gpm-content-to-post"
            type="textarea"
            placeholder="Quoi de neuf ?"
            {...register("content", {
              required: true,
            })}
          />
          <div className="gpm-icons">
            <div className="gpm-icons-buttons">
              <img className="gpm-icon" src={iconphoto} alt="icon" />
              <input
                className="gpm-text-photo"
                type="file"
                accept="image/*"
                {...register("image", {
                  required: false,
                })}
              />
            </div>
            <div className="gpm-button-post">
              <img className="gpm-icon" src={iconpost} alt="post" />
              <button
                type="submit"
                className="gpm-text-post" /*onClick={refreshPage}*/
              >
                Publier
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="gpm-posted">
        <div className="gpm-posted-header">Voici votre fil d'actualités...</div>
        {Array.isArray(dataPosts)
          ? dataPosts.map((post) => (
              <div key={post.postId}>
                <div className="gpm-posted-content">
                  <p className="gpm-posted-name">
                    {post.user.lastName} {post.user.firstName}
                  </p>
                  <p className="gpm-posted-date">
                    {dayjs(post.createdAt).locale("fr").fromNow()}
                  </p>
                  <p>{post.content}</p>
                  <img src={post.image}></img>
                  <button
                    className="gpm-posted-buttons"
                    onClick={deletePost}
                    action={"Suppression"}
                  >
                    Supprimer
                  </button>{" "}
                </div>
                <Comment post={post}></Comment>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Post;
