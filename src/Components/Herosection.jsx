import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import StaggeredText from './Animation/StaggeredText'
import { motion } from 'framer-motion';

import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { MdOutlineTextSnippet } from "react-icons/md";
import TypingEffect from './Animation/TypingEffect';

export default function Herosection() {


  return (
    <>
        <div className='flex items-center justify-center bg-white'>
        <div className="mx-auto max-w-2xl py-32 h-screen overflow-y-hidden">
          <div className='w-full'>
          <div className="sm:mb-8 sm:flex sm:justify-center sm:mx-0 mx-auto">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Our Creative Process {' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read docs <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          </div>
          <div className="text-center">
            <TypingEffect/>
            <p className="mt-6 leading-4 sm:w-[500px] text-center sm:px-0 p-4 mx-auto text-gray-600 text-sm">
            At Byyte.co, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
            </p>
            <div className="mt-10 sm:flex block items-center justify-center gap-x-6 sm:px-0 px-6 ">
              <a
                href="#">
                <div className='font-semibold bg-indigo-500 p-4 sm:my-0 my-3'>
                <StaggeredText text="Contact Us" hoverColor="white" baseColor="white" className='font-semibold text-base'/>
                </div>
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              <div className='font-semibold bg-white p-4'>
                <StaggeredText text="Learn More →" hoverColor="gray" baseColor="black" className='font-semibold text-base'/>
              </div>
              </a>
            </div>
          </div>
          {/* <div className='flex items-center gap-3 uppercase font-semibold text-sm'>
            <CgWebsite size={20} />
            website
            <MdOutlineDesignServices size={20} />
            graphics design
            <IoShareSocialOutline size={20} />
            social handles
            <FaRegImages size={20} />
            poster making   
            <MdOutlineTextSnippet size={20} />
            content wrting
          </div> */}
        </div>
        </div>
    </>
  )
}
