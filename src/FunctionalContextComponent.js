import React from "react";
import "./input.css";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionalContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "1rem",
    margin: "1rem",
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <div style={themeStyles}>Function theme</div>
    </>
  );
};

export default FunctionalContextComponent;
