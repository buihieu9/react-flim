import React from "react";
import "../../style/common.css";
import "./style.scss";
function Header(props) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <img src="https://bapngoz.com/logo.png" alt="" />
          </div>
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
