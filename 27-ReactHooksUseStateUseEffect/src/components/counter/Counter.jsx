import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {

const [count, setCount] = useState(0);
const [step, setStep] = useState (1);

const inputChange = (e) => {
    const value = e.target.value.trim();
    const number = parseInt(value, 10);

    if (value !== "" && `${number}` === value)  {
        setStep(number)
    }
};

  return (

    <div className='container'>
        <h2>Counter: {count}</h2>
        <div className='counter_btn'>
            <button onClick={ () => setCount(count - 1)}>-1</button>
            <button onClick={ () => setCount(count + 1)}>+1</button>
        </div>
        <input
         type="number"
         value={step}
         onChange={inputChange}
         placeholder='addim' 
        />
        <div className='counter_btn'>
            <button onClick={ () => setCount(count - step)}>-{step}</button>
            <button onClick={ () => setCount(count + step)}>+{step}</button>
        </div>
    </div>
  )
}

export default Counter