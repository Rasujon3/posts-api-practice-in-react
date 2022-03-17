import React from "react";
import "./Post.css";

const Post = (props) => {
  console.log(props.post);
  const { userId, title, body } = props.post;
  return (
    <div className="post">
      <small>UserID: {userId}</small>
      <h1>Title : {title}</h1>
      <p>Description: {body}</p>
    </div>
  );
};

export default Post;
