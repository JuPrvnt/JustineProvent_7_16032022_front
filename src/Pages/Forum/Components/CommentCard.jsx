import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import ConnectionAPI from "../../../service/ConnectionAPI";
import "./CommentCard.scss";

const CommentCard = (props) => {
  let { comment } = props;

  const [dataComments, setDataComments] = useState([]);
  const [showDeleteButton, setShowDeleteButton] = useState();

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let userId = userInfo.userId;
  let userAdmin = userInfo.isAdmin;

  useEffect(() => {
    if (comment.userId === userId || userAdmin === true) {
      setShowDeleteButton(true);
    }
  }, [userId, comment.userId, userAdmin]);

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
    </div>
  );
};

export default CommentCard;
