import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className= "w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg px-3 py-2 gap-3 shadow-lg bg-white rounded-3xl text-white">
          <button
          className='px-4 py-1 bg-red-600 rounded-2xl shadow-lg hover:bg-red-700' onClick={() => setColor("Red")}>Red</button>
          <button
          className='px-4 py-1 bg-yellow-300 rounded-2xl shadow-lg hover:bg-yellow-400' onClick={() => setColor("Yellow")}>Yellow</button>
          <button
          className='px-4 py-1 bg-green-600 rounded-2xl shadow-lg hover:bg-green-700' onClick={() => setColor("Green")}>Green</button>
          <button
          className='px-4 py-1 bg-gray-600 rounded-2xl shadow-lg hover:bg-gray-700' onClick={() => setColor("Gray")}>Gray</button>
          <button
          className='px-4 py-1 bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700' onClick={() => setColor("Blue")}>Blue</button>
          <button
          className='px-4 py-1 bg-purple-300 rounded-2xl shadow-lg hover:bg-purple-400' onClick={() => setColor("Lavender")}>Lavender</button>
          <button
          className='px-4 py-1 bg-lime-600 rounded-2xl shadow-lg hover:bg-lime-700' onClick={() => setColor("Lime")}>Lime</button>
        </div>
      </div>
    </div>
  )
}

export default App
