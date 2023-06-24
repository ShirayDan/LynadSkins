import React, { useState } from "react";
import "./DarkMode.css";
import { ReactComponent as Sun } from "../../i/Sun.svg";
import { ReactComponent as Moon } from "../../i/Moon.svg";

export const DarkMode = ({ theme, setTheme }) => {
  const [isDark, setIsDark] = useState(true);
  const switchTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
    setIsDark(!isDark);
  };
  return (
    <div className="wrapper">
      <input
        className={"dark_mode_input"}
        type="checkbox"
        id="darkmode-toggle"
        checked={isDark}
        onClick={() => switchTheme()}
      />
      <label className={"dark_mode_label"} for="darkmode-toggle">
        <Moon />
        <Sun />
      </label>
    </div>
  );
};
