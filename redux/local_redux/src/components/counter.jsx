import { useDispatch, useSelector } from 'react-redux';
import * as types from '../reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.count);

  return (
    <>
      <h1>Counter {value}</h1>

      <button onClick={() => dispatch({ type: types.INCREMENT })}>
        +
      </button>

      <button onClick={() => dispatch({ type: types.DECREMENT })}>
        -
      </button>
    </>
  );
};
