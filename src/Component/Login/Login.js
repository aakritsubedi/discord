import React from "react";

import { auth, provider } from "Firebase";

import LoginLogo from "assets/images/Image";

import "assets/css/Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={LoginLogo} alt="dDiscord" />
      </div>

      <button onClick={signIn}>SignIn</button>
    </div>
  );
}

export default Login;
