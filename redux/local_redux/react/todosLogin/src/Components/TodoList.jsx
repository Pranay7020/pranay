import React from "react";
import { DELETE_TODO } from "../Reducer/actions";

export const TodoList = ({ state, dispatch }) => {
  return (
    <>
      {state.todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button
            onClick={() =>
              dispatch({ type: DELETE_TODO, payload: index })
            }
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
};
