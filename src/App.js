import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useStateValue } from "./Services/Reducer/StateProvider";

import "./Assets/Styles/App.css";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return <div className="app">{!user ? <Login /> : <Home />}</div>;
}

export default App;
