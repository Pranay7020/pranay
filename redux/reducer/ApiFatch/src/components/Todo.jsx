import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const { loading, todos, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default Todo;
