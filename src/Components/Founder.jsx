import React from 'react'

function Founder() {
    const founderdata = [
        {
            id:1,
            name: "Sourav Chhimpa",
            img:"https://images.pexels.com/photos/669277/pexels-photo-669277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            role: "Founder"
        },
        {
            id:2,
            name: "Sourav Chhimpa",
            img:"https://images.pexels.com/photos/669277/pexels-photo-669277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            role: "Founder"
        },
        {
            id:3,
            name: "Sourav Chhimpa",
            img:"https://images.pexels.com/photos/669277/pexels-photo-669277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            role: "Founder"
        },
    ]
  return (
    <>
    <div className='dark:bg-black bg-white w-full flex items-center justify-evenly p-2'>
        {/* this is founder section  */}
        <div>          
        {founderdata.map((founderdata) =>(
            <div
            key={founderdata.id}
            className="flex items-center my-3 mx-auto gap-4 border border-gray-600 rounded-lg dark:bg-gray-900 bg-gray-200 sm:w-96 p-1 ">
            <img className="w-16 h-16 rounded-lg" src={founderdata.img} />
            <div className='font-medium dark:text-white'>
                <div className='text-xl font-semibold'>{founderdata.name}</div>
                <div className='-mt-1 text-gray-500'>{founderdata.role}</div>
            </div>
        </div>
        ))}
        </div>
        {/* this is socials section */}
        <div>

        </div>
    </div>
    </>
  )
}

export default Founder
