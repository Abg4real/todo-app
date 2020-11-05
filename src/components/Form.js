import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { TodoContext } from "../Context/TodoContext";

export default function Form() {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [tnd, setTnd] = useState(new Date());

  const { isNightModeOn, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isNightModeOn ? darkTheme : lightTheme;

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
    <div className="main" style={{ backgroundColor: theme.bg }}>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: theme.secondbg,
          color: theme.text,
          boxShadow: `${isNightModeOn ? "none" : "0px 0px 10px red"}`,
        }}
      >
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
    </div>
  );
}
