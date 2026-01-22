import {
  ADD_TODO_ITEMS,
  EDITS_TODO_ITEMS,
  DELETE_TODO_ITEMS,
  LOADING_TODO_ITEMS,
  ERROR_TODO_ITEMS,
} from "../Reducer/Reducer.js";

import { initialValue } from "./initialValue";

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOADING_TODO_ITEMS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ERROR_TODO_ITEMS:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case ADD_TODO_ITEMS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: [
          ...state.items,
          {
            id: Date.now(),
            text: action.payload,
            isEdit: false,
            isComplete: false,
          },
        ],
      };

    case DELETE_TODO_ITEMS:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
