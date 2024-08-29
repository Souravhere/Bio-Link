import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StaggeredText from './Animation/StaggeredText';

function NavComp() {
  return (
    <Router>
    <div className='w-full flex items-center justify-between py-4 px-3 bg-[#e5e5e1] dark:bg-black dark:text-white'>
      <h1 className='font-semibold text-2xl'>Byyte.co</h1>
      <div className='flex gap-3'>
        <NavLink>
            {/* <p>Home</p> */}
            <StaggeredText text="Home" hoverColor="gray" baseColor="black" />
        </NavLink>
        <NavLink>
            <p>About</p>
        </NavLink>
        <NavLink>
            <p>Services</p>
        </NavLink>
      </div>
      <a href="">
        <p className='font-semibold bg-[#d6ff01] py-2 px-2 rounded-lg'>Contact Us</p>
      </a>
    </div>
    </Router>
  )
}

export default NavComp
