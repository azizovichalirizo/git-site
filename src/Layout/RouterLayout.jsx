import React from 'react'
import { Outlet } from 'react-router-dom'

const RouterLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default RouterLayout