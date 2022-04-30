import React, { useState, useEffect } from "react";
import ConnectionAPI from "../../../service/ConnectionAPI";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import dayjs from "dayjs";
import "./PostCard.scss";
require("dayjs/locale/fr");

const PostCard = (props) => {
  const { post } = props;

  const [showDeleteButton, setShowDeleteButton] = useState();
  const [showComments, setShowComments] = useState();
  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    ConnectionAPI.getAllComments()
      .then((res) => {
        setDataComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let userId = userInfo.userId;
  let userAdmin = userInfo.isAdmin;

  const relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  useEffect(() => {
    if (post.userId === userId || userAdmin === true) {
      setShowDeleteButton(true);
    }
  }, [userId, post.userId, userAdmin]);

  const deletePost = () => {
    ConnectionAPI.deletePost()
      .then((valueReturn) => {
        if (valueReturn.status === "200") {
          ConnectionAPI.getAllPosts().catch((err) => {
            console.log(err);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewComment = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="gpm-posted">
        <div key={post.postId}>
          <div className="gpm-posted-content">
            <p className="gpm-posted-name">
              {post.user.lastName} {post.user.firstName}
            </p>
            <p className="gpm-posted-date">
              {dayjs(post.createdAt).locale("fr").fromNow()}
            </p>
            <p>{post.content}</p>
            {showDeleteButton && (
              <button
                className="gpm-posted-buttons gpm-button-style"
                onClick={deletePost}
                action={"Suppression"}
              >
                Supprimer
              </button>
            )}
            <img className="gpm-posted-image" src={post.image} alt=""></img>
            {setShowComments && (
              <CommentForm postId={post.postId} newComment={addNewComment} />
            )}
            <ul>
              {showComments &&
                dataComment.map((comment, i) => (
                  <CommentCard comment={comment} key={i} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
