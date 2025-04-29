import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue=()=>{
    setCounter(counter + 1);
    console.log(counter + 1);
  }

  const removeValue=()=>{
    setCounter(counter - 1);
    console.log(counter - 1);
  }

  return (
    <>
    <h1>Chai or react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br /> 
    <button onClick={removeValue}>Remove Value</button>
    {/* <h3>Current Counter: {counter}</h3> */}
    </>
  )
}

export default App
