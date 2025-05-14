import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Admin from './components/Admin/Admin.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { FiAlertTriangle } from "react-icons/fi";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[{
//       path:"",
//       element:<Home/>
//     },
//   {
//     path:"about",
//     element:<About/>
//   },
//   {
//     path:"contact-us",
//     element:<Contact/>
//   }
// ]
//   }
// ])
 const UserTypes = {
  Guest : "Guest User",
  NormalUser: "Normal User",
  AdminUser:"Admin User"
}


export const CurrentUserType= UserTypes.AdminUser   



function GuestElement({children}){
  return <>{children}</>
}

function UserElement({children}){
  if(CurrentUserType === UserTypes.AdminUser||CurrentUserType === UserTypes.NormalUser){
    return <>{children}</>;
  }else {
    return <div className='text-center text-3xl'><span className='flex justify-self-center text-6xl text-red-700 '><FiAlertTriangle /></span>You do not have access to to page!</div>
  }
}
function AdminElement({children}){
  if(CurrentUserType === UserTypes.AdminUser){
    return <>{children}</>;
  }else {
    return <div className='text-center text-3xl'><span className='flex justify-self-center text-6xl text-red-700 '><FiAlertTriangle /></span>You do not have access to to page!</div>
  }
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='home' 
      element={
      <GuestElement>
        <Home/>
      </GuestElement>}/>
      <Route path='user' element={
        <UserElement>
          <User/>
        </UserElement>}/>
      <Route path='admin' element={<AdminElement><Admin/></AdminElement>}/>
      <Route loader={githubInfoLoader}
      path='github' element={<AdminElement><Github/></AdminElement>}/>
      <Route path='*' element={<div>Page Not Found!</div>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
