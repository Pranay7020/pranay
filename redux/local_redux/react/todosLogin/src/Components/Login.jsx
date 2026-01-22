import React, { useReducer, useRef } from "react";
import { reducer } from "../Reducer/reducer";
import { initialValue } from "../Reducer/initialValue";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../Reducer/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: LOGIN_REQUEST });

    setTimeout(() => {
      if (
        userRef.current.value === "admin" &&
        passRef.current.value === "123"
      ) {
        dispatch({ type: LOGIN_SUCCESS });
        navigate("/todo");
      } else {
        dispatch({ type: LOGIN_FAILURE });
      }
    }, 1000);
  };

  return (
    <>
      <h2>Login</h2>

      <input ref={userRef} placeholder="username" />
      <input ref={passRef} type="password" placeholder="password" />

      <button onClick={handleLogin}>Login</button>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>Login Failed</p>}
    </>
  );
};

 export default Login;
