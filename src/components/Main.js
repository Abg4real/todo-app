import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Main(props) {
  const { isNightModeOn, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isNightModeOn ? darkTheme : lightTheme;
  return (
    <div style={{ backgroundColor: theme.bg, height: "100vh" }}>
      {props.children}
    </div>
  );
}
