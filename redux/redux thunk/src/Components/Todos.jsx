import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../Redux/actions';

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </>
  );
};

export default Todos;
