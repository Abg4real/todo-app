import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoContext } from "../Context/TodoContext";

export default function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  todo.tnd = new Date(todo.tnd);
  const tndString = `${todo.tnd.getDate()} ${
    months[todo.tnd.getMonth()]
  }, ${todo.tnd.getHours()}:${todo.tnd.getMinutes()}`;
  const { isNightModeOn, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isNightModeOn ? darkTheme : lightTheme;
  return (
    <div
      className="todo-card"
      style={{
        boxShadow: `${
          isNightModeOn ? "0px 0px 3px white" : "0px 0px 10px red"
        }`,
      }}
    >
      <div
        className="todo-head"
        style={{
          backgroundColor: theme.main,
        }}
      >
        <p className="date">{tndString}</p>
        <i
          className="fas fa-times"
          onClick={() => dispatch({ type: "remove_todo", id: todo.id })}
        ></i>
      </div>
      <div className="todo-body">
        <p className="todo-text">{todo.text}</p>
      </div>
    </div>
  );
}
