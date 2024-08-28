import React from 'react'

function Pojectcard() {
  return (
    <div>
      <div className="mx-auto my-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <div className='py-1 px-2 bg-orange-500/80 inline-block rounded-full font-semibold'>
                VG
            </div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Vigge Smart</h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p> */}
        <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
            See more details
        </a>
    </div>  
    </div>
  )
}

export default Pojectcard
