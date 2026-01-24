import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "../redux/reducer";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const { todos, isLoading, isError } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux Thunk Todo</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>

      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error occurred</h3>}

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default Todo;
