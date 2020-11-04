import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Form() {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [tnd, setTnd] = useState(new Date());

  function handleSubmit(e) {
    e.preventDefault();
    setTnd(new Date());
    dispatch({
      type: "add_todo",
      todo: { text, tnd },
    });
    setText("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Something!</h3>
      <input
        type="text"
        placeholder="Enter Something"
        name="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
