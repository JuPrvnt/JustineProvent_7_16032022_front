import React, { useState, useEffect } from "react";
import ConnectionAPI from "../../../../service/ConnectionAPI";
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import dayjs from "dayjs";
import "./PostCard.scss";
require("dayjs/locale/fr");

const PostCard = (props) => {
  const { post } = props;

  const [showDeleteButton, setShowDeleteButton] = useState();
  const [imagePost, setImagePost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (post.image === null) {
      setImagePost(false);
    } else {
      setImagePost(true);
    }
  }, [post.image]);

  useEffect(() => {
    ConnectionAPI.getAllComments(post.postId)
      .then((res) => {
        if (res.data) {
          setComments(res.data);
        } else {
          setComments([]);
        }
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
      .then((res) => {
        props.addPost(res.data.post);
      })
      .catch((error) => console.log(error));
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
            {imagePost && (
              <img className="gpm-posted-image" src={post.image} alt=""></img>
            )}
            <CommentForm postId={post.postId} newComment={addNewComment} />
            <ul>
              {comments.map((comment, i) => (
                <CommentCard
                  comment={comment}
                  key={i}
                  newComment={addNewComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
