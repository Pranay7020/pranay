import React, { useRef } from "react";
import { ADD_TODO } from "../Reducer/actions";
import { TodoList } from "./TodoList";

export const TodoInput = ({ state, dispatch }) => {
  const inputRef = useRef();

  return (
    <>
      <h2>Todo App</h2>

      <input ref={inputRef} placeholder="Enter todo" />
      <button
        onClick={() => {
          dispatch({
            type: ADD_TODO,
            payload: inputRef.current.value,
          });
          inputRef.current.value = "";
        }}
      >
        Add
      </button>

      <TodoList state={state} dispatch={dispatch} />
    </>
  );
};
