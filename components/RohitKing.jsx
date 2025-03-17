import React from 'react'
import { useState } from 'react';

function RohitKing() {
  const [count, setCount] = useState(0);

const increment = () => {
  setCount((prevCount) => prevCount + 1);
  console.log("Count", count); // Old count shows here!
};

return (
  <>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
  </>
);
}
export default RohitKing