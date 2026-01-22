import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_TODO,
  DELETE_TODO,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: false };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth: true };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: true };

    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
