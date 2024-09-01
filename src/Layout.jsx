import React from 'react'
import NavComp from './Components/NavComp'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
       <NavComp/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default Layout
