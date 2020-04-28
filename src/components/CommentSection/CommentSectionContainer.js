// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, changeComment] = useState();
  //const [timeStamp, setTimeStamp] = useState(props.timeStamp);
  //console.log(props);
  return (
    <div>
      {props.comments.map(item=>{
        return <Comment comment={item} />;
      })}
      
     <span className="time-stamp">{props.timeStamp}</span>
      
      
      <CommentInput changeComment={changeComment}/>
      
    </div>
  );
};

export default CommentSection;
