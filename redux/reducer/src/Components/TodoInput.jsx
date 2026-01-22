import React, { useReducer, useRef } from "react";

import { reducer } from "../Reducer/Reducer";
import { initialValue } from "../Reducer/initialValue";

import {
  ADD_TODO_ITEMS,
  LOADING_TODO_ITEMS,
  ERROR_TODO_ITEMS,
} from "../Reducer/Actions";

import { TodoList } from "./TodoList";

export const TodoInput = () => {
  const todoText = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleAddTodo = () => {
    const value = todoText.current.value.trim();

    if (value === "") {
      dispatch({ type: ERROR_TODO_ITEMS });
      return;
    }

    dispatch({ type: LOADING_TODO_ITEMS });

    setTimeout(() => {
      dispatch({ type: ADD_TODO_ITEMS, payload: value });
    }, 1000);

    todoText.current.value = "";
  };

  if (state.isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <input
        ref={todoText}
        type="text"
        placeholder="enter your task!!!"
      />

      <button onClick={handleAddTodo}>add task</button>

      {state.isError ? (
        <h3>something went wrong...</h3>
      ) : (
        <TodoList value={{ state, dispatch }} />
      )}
    </>
  );
};
