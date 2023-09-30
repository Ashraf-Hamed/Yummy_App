import React from 'react'
import {Outlet} from 'react-router-dom'
import Loading from '../Loading/Loading'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {
  return (
    <>
   <Sidebar/>
<div className="container">
<Outlet></Outlet>
</div>
      </>
  )
}
