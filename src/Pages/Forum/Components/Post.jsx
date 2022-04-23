import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import iconphoto from "../../../assets/picture-icon.png";
import iconpost from "../../../assets/advertising-icon.png";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_Post.scss";

const Post = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    ConnectionAPI.createPost({
      content: data.content,
      image: data.image[0],
    })
      .then(() => {
        navigate("/connected");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="gpm-post-content"
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
          <button type="submit" className="gpm-text-post">
            Publier
          </button>
        </div>
      </div>
    </form>
  );
};

export default Post;
