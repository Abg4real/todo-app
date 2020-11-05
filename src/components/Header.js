import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoContext } from "../Context/TodoContext";

export default function Header() {
  const { todos } = useContext(TodoContext);
  const task = todos.length > 1 ? "tasks" : "task";
  const { isNightModeOn, lightTheme, darkTheme, toggleTheme } = useContext(
    ThemeContext
  );
  const theme = isNightModeOn ? darkTheme : lightTheme;
  function handleChange() {
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    if (toggleThemeButton.classList.contains("fa-moon")) {
      // toggleThemeButton.classList.remove("fa-moon");
      toggleThemeButton.className = "fas fa-sun";
    } else if (toggleThemeButton.classList.contains("fa-sun")) {
      toggleThemeButton.className = "fas fa-moon";
    }
    toggleTheme();
  }
  return (
    <div className="header" style={{ backgroundColor: theme.main }}>
      <h1 className="heading">To-do list</h1>
      <div className="right">
        <i
          id="toggleThemeButton"
          className="fas fa-moon"
          onClick={handleChange}
        ></i>
        <p className="stat">{`${todos.length} ${task} to do now.`}</p>
      </div>
    </div>
  );
}
