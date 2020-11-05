import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import Todolist from "./components/Todolist";
import ThemeContextProvider from "./Context/ThemeContext";
import TodoContextProvider from "./Context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <ThemeContextProvider>
        <Main>
          <Header />
          <Form />
          <Todolist />
        </Main>
      </ThemeContextProvider>
    </TodoContextProvider>
  );
}

export default App;
