import React, { useState } from "react";
import Input from "../../../components/Input/index";
import { Link } from "react-router-dom";

import "../style.scss";

function Signin(props) {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="container__auth">
      <div className="logo">
        <img src="https://bapngoz.com/logo.png" alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Email"
            name="email"
            type="value"
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            label="Password"
            name="password"
            type="password"
            value={value.password}
            onChange={handleChange}
          />
        </div>

        <div className="btn">
          <button type="submit">Login</button>
        </div>
        <div>
          <p className="redirect">
            Chưa Có Tài Khoản?
            <Link className="redirect__auth" to="/auth/sign-up">
              Đăng Kí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
