import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";


function Login() {
 

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg"
          alt="slack-logo"
        />
        <h1>Sign in to Slack</h1>
        <p>slack.com</p>
        <Button variant="outlined" color="primary">
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;