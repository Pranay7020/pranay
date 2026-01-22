import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../Reducer/Todos/Action';

export const TodoList = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [updateText, setUpdateText] = useState('');

  const value = useSelector(state => state.todo.todo);

  const addTodo = () => {
    dispatch({ type: types.ADDTODOS, payload: text });
    setText('');
  };

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {value.map(el => (
        <div key={el.id} style={{ width: '50%', margin: '10px auto' }}>
          
          {el.isEdit ? (
            <input
              defaultValue={el.text}
              onChange={(e) => setUpdateText(e.target.value)}
            />
          ) : (
            <p>{el.text}</p>
          )}

          {el.isEdit ? (
            <>
              <button onClick={() => dispatch({ type: types.CANCELTODOS, payload: el.id })}>
                Cancel
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: types.CONFIRMTODOS,
                    payload: { id: el.id, text: updateText }
                  })
                }
              >
                Confirm
              </button>
            </>
          ) : (
            <>
              <button onClick={() => dispatch({ type: types.EDITTODOS, payload: el.id })}>
                Edit
              </button>
              <button onClick={() => dispatch({ type: types.DELETETODOS, payload: el.id })}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
