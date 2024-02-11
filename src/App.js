import FunctionalContextComponent from "./FunctionalContextComponent.js";
import React from "react";
import ThemeProvider from "./ThemeContext.js";

export const App = () => {
  return (

      <ThemeProvider>
        <FunctionalContextComponent />
      </ThemeProvider>
  );
};
