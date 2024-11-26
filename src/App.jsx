import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import RouterLayout from './Layout/RouterLayout'
import AllProduct from './pages/AllProduct' 
const router =createBrowserRouter([
  {
  path:"/",
  element: (
    <RouterLayout/>
  ),
  children:[
    {
      index:true,
      element:<AllProduct/>,
    }
  ]
  },
])
const App = () => {
  return (
    <div>
  <RouterProvider router={router}/>
    </div>
  )
}

export default App
