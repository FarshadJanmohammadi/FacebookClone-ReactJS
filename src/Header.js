import React from "react";
import { AiOutlineSearch, AiFillHome, AiFillFlag, AiOutlinePlus } from "react-icons/ai";
import {
  MdSubscriptions,
  MdSupervisedUserCircle,
  MdForum,
  MdNotificationsActive,
  MdExpandMore,
} from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <AiOutlineSearch />
          <input type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <AiFillHome size="1.8em" />
        </div>
        <div className="header__option">
          <AiFillFlag size="1.8em" />
        </div>
        <div className="header__option">
          <MdSubscriptions size="1.8em" />
        </div>
        <div className="header__option">
          <IoStorefrontSharp size="1.8em" />
        </div>
        <div className="header__option">
          <MdSupervisedUserCircle size="1.8em" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <CgProfile size="1.8em" />
          <h4>Sonny Sagna</h4>
        </div>
        <AiOutlinePlus />
        <MdForum />
        <MdNotificationsActive />
        <MdExpandMore />
      </div>
    </div>
  );
}

export default Header;
