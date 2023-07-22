import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};