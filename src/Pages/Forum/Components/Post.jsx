import React from "react";
import { useForm } from "react-hook-form";
import iconphoto from "../../../assets/picture-icon.png";
import iconpost from "../../../assets/advertising-icon.png";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_Post.scss";

const Post = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    ConnectionAPI.createPost({
      content: data.content,
      image: data.image[0],
    }).catch((error) => console.log(error));
  };

  return (
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
        </div>
      </div>
      <div className="gpm-posted"></div>
    </div>
  );
};

export default Post;
