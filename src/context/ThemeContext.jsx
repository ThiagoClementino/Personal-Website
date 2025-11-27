import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* Aplica a classe de tema no wrapper principal */}
      <div className={isDark ? "theme-dark" : "theme-light"}>
        <div className="app-wrapper">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};
