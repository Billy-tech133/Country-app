import React, { useState, useContext } from "react";

const AppProvider = React.createContext();
const AppDataLayer = ({ children }) => {
  const lightMode = {
    appBackground: "hsl(0, 0%, 98%)",
    navBackground: "hsl(0, 0%, 100%)",
    inputBackground: "hsl(0, 0%, 100%)",
    inputText: "hsl(0, 0%, 52%)",
    cardBackground: "hsl(0, 0%, 100%)",
    textColor: "hsl(200, 15%, 8%)",
  };

  const darkMode = {
    appBackground: "hsl(207, 26%, 17%)",
    navBackground: "hsl(209, 23%, 22%)",
    inputBackground: "hsl(209, 23%, 22%)",
    inputText: "hsl(0, 0%, 100%)",
    cardBackground: "hsl(209, 23%, 22%)",
    textColor: "hsl(0, 0%, 100%)",
  };

  const themes = {
    light: lightMode,
    dark: darkMode,
  };
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("dark mode");
  const changeTheme = () => {
    if (theme === "light" && text === "dark mode") {
      setText("light mode");
      setTheme("dark");
    } else {
      setText("dark mode");
      setTheme("light");
    }
  };

  return (
    <AppProvider.Provider
      value={{
        theme,
        themes,
        text,
        setTheme,
        changeTheme,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppProvider);
};

export { AppDataLayer, AppProvider };
