import React from "react";
import { useTheme } from "../ThemeContext";

const Switcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="theme-switch">
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
};

export default Switcher;
