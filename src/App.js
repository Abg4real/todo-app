import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import TodoContextProvider from "./Context/TodoContext";

function App() {
  return (
    <React.Fragment>
      <TodoContextProvider>
        <Header />
        <Form />
        <Todolist />
      </TodoContextProvider>
    </React.Fragment>
  );
}

export default App;
