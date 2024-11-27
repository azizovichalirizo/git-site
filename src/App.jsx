import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import RouterLayout from './Layout/RouterLayout'
import AllProduct from './pages/AllProduct' 
import AboutSeedra from './pages/AboutSeedra'
import OurBlog from './pages/OurBlog'
import Contact from './pages/Contact'
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
    },
    {
      path:"About",
      element:<AboutSeedra/>,
     
    },
    {
      path:"Blog",
      element:<OurBlog/>,
     
    },
    {
    path:"Contact",
    element:<Contact/>
    },
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
