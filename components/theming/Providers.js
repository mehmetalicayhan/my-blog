import React from "react";
import { useDarkMode } from "./useDarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toggle from "./Toggle";

function Providers({ children }) {
  const [theme, setTheme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
}

export default Providers;
