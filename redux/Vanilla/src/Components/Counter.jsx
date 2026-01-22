import React from 'react';
import { myStore } from '../Store/Store';
import { INCREMENT, DECREMENT } from '../Reducer/Action';

export const Counter = () => {
  const [, forceUpdate] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = myStore.subscribe(() =>
      forceUpdate(x => x + 1)
    );
    return unsubscribe;
  }, []);

  const state = myStore.getState();

  return (
    <>
      <h1>Counter {state.count}</h1>

      <button onClick={() => myStore.dispatch({ type: INCREMENT })}>
        Increment
      </button>

      <button onClick={() => myStore.dispatch({ type: DECREMENT })}>
        Decrement
      </button>
    </>
  );
};
