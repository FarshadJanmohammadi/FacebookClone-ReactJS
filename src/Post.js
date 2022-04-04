import React from "react";
import { ExpandMoreOutlined, ThumbUp } from "@mui/icons-material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>TimeStamp...</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleIcon />
          <p>comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          <p>share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
