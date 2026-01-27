import axios from "axios";
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./actionTypes";

export const fetchTodos = () => (dispatch) => {
  dispatch({ type: FETCH_TODOS_REQUEST });

  axios
    .get("http://localhost:8080/todos") // API
    .then((res) => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        payload: err.message,
      });
    });
};
