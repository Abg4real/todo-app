import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoContext } from "../Context/TodoContext";
import Todo from "./Todo";

export default function Todolist() {
  const { todos } = useContext(TodoContext);
  const { isNightModeOn, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isNightModeOn ? darkTheme : lightTheme;
  return todos.length ? (
    <div className="second-div">
      <div
        className="todo-grid"
        style={{ backgroundColor: theme.bg, color: theme.text }}
      >
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  ) : (
    <div className="empty-list" style={{ color: theme.text }}>
      <h1>Free Time! No to-dos!</h1>
    </div>
  );
}
