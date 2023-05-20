import React, { useEffect, useState } from "react";
import logo from "../assets/TaskManagerlogo.png";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme" || "dark"))
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TaskManager Logo" />
        <span>Taskmanager</span>
      </div>
      <div className="themeSelector">
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={
            theme === "gradient1" ? "gradient1 activeTheme" : "gradient1"
          }
          onClick={() => setTheme("gradient1")}
        ></span>
        <span
          className={
            theme === "gradient2" ? "gradient2 activeTheme" : "gradient2"
          }
          onClick={() => setTheme("gradient2")}
        ></span>
        <span
          className={
            theme === "gradient3" ? "gradient3 activeTheme" : "gradient3"
          }
          onClick={() => setTheme("gradient3")}
        ></span>
      </div>
    </header>
  );
};
