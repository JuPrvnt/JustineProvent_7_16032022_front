import React from "react";
import { useForm } from "react-hook-form";
import iconphoto from "../../../../assets/picture-icon.png";
import iconpost from "../../../../assets/advertising-icon.png";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import "./PostForm.scss";

const PostForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    ConnectionAPI.createPost({
      content: data.content,
      image: data.image[0],
    })
      .then((res) => {
        props.addPost(res.data.post);
      })
      .catch((error) => console.log(error));
  };

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
              <button type="submit" className="gpm-button-style">
                Publier
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
