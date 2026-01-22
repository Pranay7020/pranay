import axios from 'axios';
import * as types from './actionTypes';

export const getTodos = () => (dispatch) => {
  dispatch({ type: types.GET_TODOS_REQUEST });

  axios
    .get('http://localhost:8080/todos')
    .then((res) => {
      dispatch({
        type: types.GET_TODOS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({ type: types.GET_TODOS_FAILURE });
    });
};

export const addTodo = (title) => (dispatch) => {
  dispatch({ type: types.ADD_TODO_REQUEST });

  axios
    .post('http://localhost:8080/todos', {
      title,
      status: false,
    })
    .then(() => {
      dispatch({ type: types.ADD_TODO_SUCCESS });
      dispatch(getTodos());
    })
    .catch(() => {
      dispatch({ type: types.ADD_TODO_FAILURE });
    });
};
