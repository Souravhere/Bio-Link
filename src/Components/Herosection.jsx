import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import StaggeredText from './Animation/StaggeredText'


export default function Herosection() {

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
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl overflow-y-hidden">
              Data to enrich your online business
            </h1>
            <p className="mt-6 leading-4 sm:w-[500px] text-center mx-auto text-gray-600 text-sm">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#">
                <div className='font-semibold bg-[#d6ff01] p-4'>
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
        </div>
        </div>
    </>
  )
}
