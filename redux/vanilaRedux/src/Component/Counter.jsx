import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter {count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>

      <button onClick={() => setCount((prev) => prev - 1)}>
        decrement
      </button>
    </>
  );
};
