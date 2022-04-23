import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_Comment.scss";

const Comment = () => {
  const { register, handleSubmit } = useForm();
  const [dataComments, setDataComments] = useState([]);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    ConnectionAPI.createComment({
      content: data.content,
    }).catch((error) => console.log(error));
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="gpm-post-content"
          type="textarea"
          placeholder="Pour commenter, c'est par ici..."
          {...register("content", {
            required: true,
          })}
        />
        <div className="gpm-icons">
          <div className="gpm-button-post">
            <button type="submit" className="gpm-text-post">
              Commenter
            </button>
          </div>
        </div>
      </form>

      {Array.isArray(dataComments)
        ? dataComments.map((comment) => (
            <div key={comment.commentId} className="gpm-posted">
              <div className="gpm-posted-header">
                {comment.user.firstName} a publié :
              </div>
              <div className="gpm-posted-content">
                <p>{comment.content}</p>
              </div>
              <div className="gpm-posted-footer">
                <button
                  className="gpm-posted-buttons"
                  //onClick={deleteComment}
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
