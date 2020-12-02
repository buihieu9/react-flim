import React from "react";
import { Route } from "react-router-dom";
import Signin from "./Signin/index";
import Signup from "./Signup/index";
import "./style.scss";

Auth.propTypes = {};

function Auth(props) {
  return (
    <div className="auth">
      <Route path="/auth/sign-in" component={Signin} />
      <Route path="/auth/sign-up" component={Signup} />
    </div>
  );
}

export default Auth;
