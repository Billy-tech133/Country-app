import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppProvider = React.createContext();

const url = "https://restcountries.eu/rest/v2/all";

const AppDataLayer = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("dark mode");
  const [countries, setCountries] = useState([]);

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

  const fetchData = async () => {
    const response = await axios.get(url);
    setCountries(response.data);
    console.log(response.data);
    return response;
  };

  useEffect(() => {
    fetchData();
  }, []);
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
        countries,
        setCountries,
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
