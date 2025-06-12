
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvide from './Context/UserContextProvide'

function App() {


  return (
   
     <UserContextProvide>
      <Login />
      <Profile />
     </UserContextProvide>
 
  )
}

export default App
