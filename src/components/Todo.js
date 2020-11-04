import React, { useContext } from "react";
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
  return (
    <div className="todo-card">
      <div className="todo-head">
        <p className="date">{tndString}</p>
        <i
          className="fas fa-times"
          onClick={() => dispatch({ type: "remove_todo", id: todo.id })}
        ></i>
      </div>
      <div className="todo-body">
        <p class="todo-text">{todo.text}</p>
      </div>
    </div>
  );
}
