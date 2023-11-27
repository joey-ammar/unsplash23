import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [searchTerm, setSearchTerm] = useState("monkey");

  const toggleDarkTheme = () => {
    let newDarkValue = !isDarkTheme;
    setIsDarkTheme(newDarkValue);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkValue);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
