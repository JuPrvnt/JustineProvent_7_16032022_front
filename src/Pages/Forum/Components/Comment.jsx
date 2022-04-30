import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./_Comment.scss";

const Comment = (props) => {
  const { register, handleSubmit } = useForm();
  const [dataComments, setDataComments] = useState([]);
  const [showDeleteButton, setShowDeleteButton] = useState();

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let userId = userInfo.userId;
  let userAdmin = userInfo.isAdmin;

  const navigate = useNavigate();

  const onSubmit = (data) => {
    ConnectionAPI.createComment({
      content: data.content,
      postId: props.post.postId,
    })
      .then((valueReturn) => {
        if (valueReturn.status == "201") {
          ConnectionAPI.getAllComments()
            .then((res) => {
              setDataComments(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ConnectionAPI.getAllComments()
      .then((res) => {
        setDataComments(res.data);
        if (props.post.userId === userId || userAdmin === true) {
          setShowDeleteButton(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteComment = () => {
    ConnectionAPI.deleteComment()
      .then((valueReturn) => {
        if (valueReturn.status == "200") {
          ConnectionAPI.getAllComments()
            .then((res) => {
              setDataComments(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

      {Array.isArray(dataComments)
        ? dataComments.map((comment) => (
            <div key={comment.commentId} className="gpm-comment-posted">
              <div className="gpm-comment-name-posted">
                {comment.user.firstName} a publié :
              </div>
              <div className="gpm-comment-content-posted">
                <div>{comment.content}</div>
                <div>
                  {showDeleteButton && (
                    <button
                      className="gpm-comment-buttons-posted gpm-button-style"
                      onClick={deleteComment}
                      action={"Suppression"}
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Comment;
