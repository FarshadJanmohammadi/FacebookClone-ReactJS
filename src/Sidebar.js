import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Avatar from "@mui/material/Avatar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        Icon={Avatar}
        title="Farshad Janmoahammadi"
        src="https://avatars.githubusercontent.com/u/60422297?s=400&u=9dc85fcd3584eede8679de4bbb78735fa1215a62&v=4"
      />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow titel="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={MessageIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Marketplace" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
