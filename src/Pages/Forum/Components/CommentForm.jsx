import React from "react";
import { useForm } from "react-hook-form";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./CommentForm.scss";

const CommentForm = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    ConnectionAPI.createComment({
      content: data.content,
      postId: props.postId,
    })
      .then((res) => {
        props.newComment(res.data.comment);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="gpm-comment">
        <input
          className="gpm-comment-content"
          type="textarea"
          placeholder="Pour commenter, c'est par ici..."
          {...register("content", {
            required: true,
          })}
        />
        <button type="submit" className="gpm-button-comment gpm-button-style">
          Commenter
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
