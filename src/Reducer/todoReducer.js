import { v4 as uuid } from "uuid";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [
        ...state,
        {
          text: action.todo.text,
          tnd: action.todo.tnd,
          id: uuid(),
        },
      ];
    case "remove_todo":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
