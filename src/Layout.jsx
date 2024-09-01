import React from 'react'
import NavComp from './Components/NavComp'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import useSmoothScroll from './Hooks/UseSmoothScroll';

function Layout() {
    useSmoothScroll();
  return (
    <>
       <div>
       <NavComp/>
       <Outlet/>
       <Footer/>
       </div>
    </>
  )
}

export default Layout
