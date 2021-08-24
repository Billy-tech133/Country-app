import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import uuid from "react-uuid";

const AppProvider = React.createContext();

const url = "https://restcountries.eu/rest/v2/all";

const AppDataLayer = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("dark mode");
  const [searchTerm, setSearchTerm] = useState("");
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

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${url}`);
      const { data } = response;
      if (data) {
        const newCountries = data
          .filter((country) => {
            if (searchTerm === "") {
              return country;
            } else if (
              country.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return country;
            }
          })
          .map((country) => {
            const { name, population, flag, region, capital } = country;
            return {
              id: uuid(),
              name: name,
              population: population,
              flag: flag,
              region: region,
              capital: capital,
            };
          });
        setCountries(newCountries);
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);
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
        searchTerm,
        setSearchTerm,
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
