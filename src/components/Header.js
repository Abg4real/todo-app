import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Header() {
  const { todos } = useContext(TodoContext);
  const task = todos.length > 1 ? "tasks" : "task";
  return (
    <div className="header">
      <h1 className="heading">To-do list</h1>
      <p className="stat">{`${todos.length} ${task} to do now.`}</p>
    </div>
  );
}
