import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StateProvider } from "./Services/Reducer/StateProvider";
import reducer, { initialState } from "./Services/Reducer";

import "./Assets/Styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
