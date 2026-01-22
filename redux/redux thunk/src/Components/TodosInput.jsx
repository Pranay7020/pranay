import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/actions';

const TodosInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TodosInput;
