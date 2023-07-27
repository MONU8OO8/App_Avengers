"use client";

import { ThemeProvider } from "styled-components";
import { darkMode, lightMode, globalColors } from "../Styles/theme";
import { useSelector } from "react-redux";
import { uiState } from "../Redux/uiSlice";

export default function Theme({ children }) {
  const { theme } = useSelector(uiState);
  const mode = theme === "dark" ? darkMode : lightMode;

  const styleObj = {
    ...mode,
    currentTheme: theme,
    darkMode,
    lightMode,
    globalColors,
  };

  return <ThemeProvider theme={styleObj}>{children}</ThemeProvider>;
}
