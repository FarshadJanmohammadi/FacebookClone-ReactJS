import React from "react";
import Header from "../../Layouts/Header";
import Sidebar from "../../Layouts/Sidebar";
import Feed from "../../Layouts/Feed";
import Widgets from "../../Layouts/Widgets";

import "../../Assets/Styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </>
  );
}

export default Home;
