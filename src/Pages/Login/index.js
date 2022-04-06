import { Button } from "@mui/material";
import React from "react";
import { auth, provider } from "../../Services/firebase";
import { useStateValue } from "../../Services/Reducer/StateProvider";
import { actionTypes } from "../../Services/Reducer";

import "../../Assets/Styles/Login.css";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIN = () => {
    //sign in ...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
      </div>
      <Button type="submit" onClick={signIN}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
