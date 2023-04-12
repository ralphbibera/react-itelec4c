import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="app">
      <h1>Counter Example Bibera</h1>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>

        {count === 0 ? (
          <p>The count is zero </p>
        ) : count > 0 ? (
          <p>The count is positive</p>
        ) : (
          <p>The count is negative</p>
        )}
      </div>
    </div>
  );
};

export default App;
