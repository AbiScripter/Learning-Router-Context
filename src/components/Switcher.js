import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Switcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switch">
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
};

export default Switcher;
