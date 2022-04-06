import React from "react";
import Avatar from "@mui/material/Avatar";

import "../../Assets/Styles/SidebarRow.css";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src ? <Avatar src={src} /> : <Icon />} <h4> {title} </h4>{" "}
    </div>
  );
}

export default SidebarRow;
