import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_REQUEST:
    case types.ADD_TODO_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: payload,
      };

    case types.ADD_TODO_SUCCESS:
      return { ...state, isLoading: false };

    case types.GET_TODOS_FAILURE:
    case types.ADD_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
