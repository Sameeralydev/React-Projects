import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  let username;
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Tailwind Test</h1>
    <p className="text-gray-500">This is a Tailwind CSS example.</p>
   
    <Cards username="Sameer"/>
    <Cards username="Test"/>
    </>
  )
}

export default App
