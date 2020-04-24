//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import PostData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {PostData.map(postItem=>{
        return <Post post={postItem} />;
      })}
    </div>   
  );
};

export default PostsPage;
