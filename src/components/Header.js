import React from "react";
import logo from "../assets/TaskManager.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TaskManager Logo" />
        <span>Taskmanager</span>
      </div>
      <div className="themeSelector">
        <span className="light "></span>
        <span className="medium activeTheme"></span>
        <span className="dark"></span>
        <span className="gradient1"></span>
        <span className="gradient2"></span>
        <span className="gradient3"></span>
      </div>
    </header>
  );
};
