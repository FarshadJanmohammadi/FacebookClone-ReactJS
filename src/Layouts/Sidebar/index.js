import React from "react";
import Avatar from "@mui/material/Avatar";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "../../Services/Reducer/StateProvider";
import SidebarRow from "../../Components/SlidebarRow";

import "../../Assets/Styles/Sidebar.css";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow Icon={Avatar} title={user.displayName} src={user.photoURL} />
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
