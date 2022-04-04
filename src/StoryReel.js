import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/564x/0f/6d/40/0f6d40a11b7135e33ac27685dd9490bb.jpg"
        profileSrc="https://i.pinimg.com/564x/d6/fb/a8/d6fba80c63c6852632a91ac7edb2aa07.jpg"
        title="Farshad Jan"
      />
      <Story
        image="https://i.pinimg.com/564x/64/46/f1/6446f1bd7d52812b51d5f1260573bd65.jpg"
        profileSrc="https://i.pinimg.com/564x/6c/99/c0/6c99c00f764edf7ab63b1df69d9a1373.jpg"
        title="Rafeh Qazi"
      />
      <Story
        image="https://i.pinimg.com/564x/bc/a7/03/bca7039041bbfc61929fcb9f7f53a10f.jpg"
        profileSrc="https://i.pinimg.com/564x/87/9b/f3/879bf3966cf411610cc5277c15449cd6.jpg"
        title="jame kan"
      />
      <Story
        image="https://i.pinimg.com/564x/e3/dc/93/e3dc9382601258080c559981f31be1c1.jpg"
        profileSrc="https://i.pinimg.com/564x/6b/ce/5d/6bce5dc7d33e846beb4819df47cbb5b1.jpg"
        title="selena seza"
      />
      <Story
        image="https://i.pinimg.com/564x/60/c5/fb/60c5fbfeb8818d000acc3f6f06e3df05.jpg"
        profileSrc="https://i.pinimg.com/564x/03/7e/83/037e839e17d07569380f7003714acc88.jpg"
        title="katrin refaul"
      />
    </div>
  );
}

export default StoryReel;
