import React, { useState } from 'react'


function Counter() {

      const [count, setCount] = useState(0);
      const [step, setStep] = useState(1); // New state for step value
    
      return (
        <>
          <h2>Your Count is: {count}</h2>
    
          <input 
            type="number" 
            placeholder="Enter the steps" 
            value={step}
            onChange={(e) => setStep(Number(e.target.value))} 
          />
    
          <button onClick={() => setCount(count + step)}>Increase</button>
          <button onClick={() => setCount(count - step)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </>
      );
    }
    

    
export default Counter