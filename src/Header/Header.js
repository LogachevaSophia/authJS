import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="frame1">
        <a className href="#">
          {" "}
          RENTMARKET
        </a>
      </div>
      <div className="frame2">
        <a className="frame21" href="">
          {" "}
          Заявки
        </a>
        <a className="frame22" href="#">
          {" "}
          Список агентов
        </a>
      </div>
      <div className="frame3">
        <a href="#">
          {" "}
          <button className="signin">Sign in</button>
        </a>
        <a href="/signup">
          {" "}
          <button className="signup">Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
