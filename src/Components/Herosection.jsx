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

export default function Herosection() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const words = [
    "Breathtaking Websites",
    "Vivid Posters",
    "Strategic Marketing"
  ];
  
  const textColor = ["#FF5733", "#33FF57", "#3357FF"]; // Add more colors as needed

  return (
    <>
        <div className='flex items-center justify-center bg-[#e5e5e1]'>
        <div className="mx-auto max-w-2xl py-32 h-screen overflow-y-hidden">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl overflow-y-hidden">
      Transforming Your Vision with{' '}
      <motion.span
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-gradient"
      >
        {text}
      </motion.span>
    </h1>
            <p className="mt-6 leading-4 sm:w-[500px] text-center sm:px-0 p-4 mx-auto text-gray-600 text-sm">
            At Byyte.co, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.
            </p>
            <div className="mt-10 sm:flex block items-center justify-center gap-x-6 sm:px-0 px-6 ">
              <a
                href="#">
                <div className='font-semibold bg-[#d6ff01] p-4 sm:my-0 my-3'>
                <StaggeredText text="Contact Us" hoverColor="gray" baseColor="black" className='font-semibold text-base'/>
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
