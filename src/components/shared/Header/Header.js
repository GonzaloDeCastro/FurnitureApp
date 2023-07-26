import React from "react";
import logo from "../../../images/logo.ico";

const Header = () => {
  return (
    <div
      className="containerHeader"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
    >
      <div
        style={{
          margin: "0rem 0.5rem 0rem 0.5rem",
        }}
      >
        <img src={logo} alt="logo" />
      </div>
      Furniture App
    </div>
  );
};

export default Header;
