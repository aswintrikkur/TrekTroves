import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-xl z-50 bg-sky-800 px-4 sm:px-16 sm:flex  sm:justify-between  sm:items-center py-3 '>
        	<h2 className=" self-start text-3xl py-4 font-bold font-leading-tight sm:self-center   ">TOLL Calculator</h2>
            <ul className='pb-2 pl-[46%]  flex gap-10 text-lg font-semibold sm:p-0'>
                <li>Instructions</li>
                <li>Pricing</li>
                <li className='hidden sm:contents' >Join</li>
            </ul>

    </div>
  )
}
