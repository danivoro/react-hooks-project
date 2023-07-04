import './App.css';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(4)

  function decrementCount(){
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  function multiplyByTwo(){
    setCount(prevCount => prevCount * 2)
  }

  function divideByTwo(){
    setCount(prevCount => prevCount / 2)
  }

  return (
    <>
    <button onClick={multiplyByTwo}>x2</button>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    <button onClick={divideByTwo}>/2</button>
    </>
  );
}

export default App;
