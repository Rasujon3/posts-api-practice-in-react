import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <h1 className="total">Total posts : {posts.length}</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="posts">
            <Post post={post} key={post.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
