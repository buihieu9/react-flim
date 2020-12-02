import React, { useState } from "react";
import Input from "../../../components/Input/index";
import { Link } from "react-router-dom";
import "../style.scss";

function Signup(props) {
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [err, setErr] = useState({
    isErr: true,
    nameErr: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkPassword = (valueInput, name) => {
    setErr({
      ...err,
      isErr: true,
      nameErr: "",
    });

    if (name === "email") {
      let checkRegex = /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gim;
      if (!checkRegex.test(value.email)) {
        setErr({
          ...err,
          isErr: false,
          nameErr: "cú pháp email không hợp lệ",
        });
      }
      return;
    }

    if (valueInput.length < 6) {
      setErr({
        ...err,
        isErr: false,
        nameErr: "password quá ngắn",
      });
      return;
    }
    if (name === "confirmPassword") {
      setErr({
        ...err,
        isErr: valueInput === value.password,
        nameErr: "confirmPassword không trùng nhau",
      });
    }
  };

  const handle = (e) => {
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      checkPassword(e.target.value, e.target.name);
    }
    if (e.target.name === "email") {
      checkPassword(e.target.value, e.target.name);
    }
  };
  return (
    <div className="container__auth">
      <div className="logo">
        <img src="https://bapngoz.com/logo.png" alt="logo" />
      </div>

      {!err.isErr && (
        <div className="err">
          <p>{err.nameErr}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="container-input">
          <Input
            label="User Name"
            name="userName"
            type="value"
            value={value.userName}
            onChange={handleChange}
            onBlur={handle}
          />
        </div>
        <div className="container-input">
          <Input
            label="Email"
            name="email"
            type="value"
            value={value.email}
            onChange={handleChange}
            onBlur={handle}
          />
        </div>
        <div className="container-input">
          <Input
            label="Password"
            name="password"
            type="password"
            value={value.password}
            onChange={handleChange}
            onBlur={handle}
          />
        </div>
        <div className="container-input">
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={value.confirmPassword}
            onChange={handleChange}
            onBlur={handle}
          />
        </div>
        <div className="btn">
          <button type="submit">Register</button>
        </div>
        <div>
          <p className="redirect">
            Bạn Có Tài Khoản?
            <Link className="redirect__auth" to="/auth/sign-in">
              Đăng Nhập
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
