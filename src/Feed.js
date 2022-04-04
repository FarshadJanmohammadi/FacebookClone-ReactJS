import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/60422297?s=400&u=9dc85fcd3584eede8679de4bbb78735fa1215a62&v=4"
        message="wow this work"
        timestamp="this is a timestamp"
        username="@farshadjan"
        image="https://i.pinimg.com/564x/8a/55/8f/8a558ff7713fb5bb96e77cffa0e55945.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/60422297?s=400&u=9dc85fcd3584eede8679de4bbb78735fa1215a62&v=4"
        message="wow this work"
        timestamp="this is a timestamp"
        username="@farshadjan"
        image="https://i.pinimg.com/564x/8a/55/8f/8a558ff7713fb5bb96e77cffa0e55945.jpg"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/60422297?s=400&u=9dc85fcd3584eede8679de4bbb78735fa1215a62&v=4"
        message="wow this work"
        timestamp="this is a timestamp"
        username="@farshadjan"
        image="https://i.pinimg.com/564x/8a/55/8f/8a558ff7713fb5bb96e77cffa0e55945.jpg"
      />
    </div>
  );
}

export default Feed;
