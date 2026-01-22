import TodosInput from '../Components/TodosInput';
import Todos from '../Components/Todos';

const HomePage = () => {
  return (
    <>
      <h1>Redux Thunk Todo App</h1>
      <TodosInput />
      <Todos />
    </>
  );
};

export default HomePage;
