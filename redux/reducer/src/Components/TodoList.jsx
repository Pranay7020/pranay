import React from "react";
import { DELETE_TODO_ITEMS } from "../Reducer/Actions";

export const TodoList = ({ value }) => {
  const { state, dispatch } = value;

  return (
    <div>
      {state.items.map((item) => (
        <div key={item.id}>
          <span>{item.text}</span>
          <button
            onClick={() =>
              dispatch({
                type: DELETE_TODO_ITEMS,
                payload: item.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
