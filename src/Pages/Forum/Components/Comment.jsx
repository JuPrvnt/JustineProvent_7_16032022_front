import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_Comment.scss";

const Comment = (props) => {
  const { register, handleSubmit } = useForm();
  const [dataComments, setDataComments] = useState([]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    ConnectionAPI.createComment({
      content: data.content,
      postId: props.post.postId,
    })
      .then(() => {
        navigate("/connected");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ConnectionAPI.getAllComments()
      .then((res) => {
        setDataComments(res.data);
        navigate("/connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteComment = () => {
    ConnectionAPI.deleteComment()
      .then(() => {
        navigate("/connected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="gpm-comment">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="gpm-comment-content"
          type="textarea"
          placeholder="Pour commenter, c'est par ici..."
          {...register("content", {
            required: true,
          })}
        />
        <div className="gpm-comment-icons">
          <div className="gpm-button-comment">
            <button type="submit" className="gpm-text-comment">
              Commenter
            </button>
          </div>
        </div>
      </form>

      {Array.isArray(dataComments)
        ? dataComments.map((comment) => (
            <div key={comment.commentId} className="gpm-comment">
              <div className="gpm-comment-header">
                {comment.user.firstName} a publié :
              </div>
              <div className="gpm-comment-content">
                <p>{comment.content}</p>
              </div>
              <div className="gpm-comment-footer">
                <button
                  className="gpm-comment-buttons"
                  onClick={deleteComment}
                  action={"Suppression"}
                >
                  Supprimer
                </button>{" "}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Comment;
