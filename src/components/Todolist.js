import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Todo from "./Todo";

export default function Todolist() {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-grid">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  ) : (
    <div className="empty-list">
      <h1>Free Time! No to-dos!</h1>
    </div>
  );
}
