import React from 'react'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Byyte</span>
              </a>
              <p className='sm:w-1/3 w-full text-sm text-gray-500 mt-2'>At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink className="hover:text-indigo-500" to='/'>Home</NavLink>
                      </li>
                      <li className="mb-4">
                          <NavLink className="hover:text-indigo-500" to='aboutus'>About Us</NavLink>
                      </li>
                      <li>
                          <NavLink to='services' className="hover:text-indigo-500">Services</NavLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/souravhere" className="hover:text-indigo-500 ">Github</a>
                      </li>
                      <li>
                          <a href="/" className="hover:text-indigo-500">Discord <span className='text-[8px] bg-indigo-500 text-white px-1 rounded-lg'>SOON</span></a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/Privacy-Policy.pdf" target='blank' className="hover:text-indigo-500">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="/Terms.pdf" target='blank' className="hover:text-indigo-500">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:text-indigo-500">Byyte.in</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
                <a href="https://www.instagram.com/byyte.co/" className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-500 ">
                    <FaInstagram className="w-6 h-6 transition-transform transform hover:scale-110 duration-500" />
                </a>
                {/* <a href="#" className="text-gray-500 overflow-x-visible relative hover:text-blue-500 dark:hover:text-blue-400">
                    <BsTwitterX className="w-6 h-6 transition-transform transform hover:scale-110 duration-500" />
                </a> */}
                <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-500">
                    <FaGithub className="w-6 h-6 transition-transform transform hover:scale-110 duration-500" />
                  </a>
                
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
