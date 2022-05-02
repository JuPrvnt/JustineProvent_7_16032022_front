import React, { useState, useEffect } from "react";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import "./CommentCard.scss";

const CommentCard = (props) => {
  let { comment } = props;

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
      .then((res) => {
        props.newComment(res.data.comment);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="gpm-comment-posted">
      <div key={comment.commentId}>
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
