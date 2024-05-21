import React from 'react'
import { asset0, asset54 } from '../assets'

const Footer = () => {
  return (
    <div className='container'>
      <div className='rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse  items-center px-8 py-12 gap-8'>
        <a href='#' className=' font-light font-display'>Documentation</a>
        <div className='flex gap-8 text-lg'>
          <a href='#' className='text-gray-600 hover-text-gray-900'><i class="fa-brands fa-twitter"></i></a>
          <a href='#' className='text-gray-600 hover-text-gray-900'><i class="fa-brands fa-github"></i></a>
        </div>
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img className="object-cover max-w-12 max-h-12" src={asset0}/>
          <span className="text-lg font-medium font-display">ToDesktop</span>
        </a>
      </div>
      <div className='flex flex-col gap-6 items-center justify-center my-12'>
        <div className='flex gap-2 items-center'>
          <img src={asset54} className='h-4 w-4' />
          <p className='text-sm text-gray-600'>A Y Combinator company.</p>
        </div>
        <p className='text-sm text-gray-400'>© 2024 ToDesktop, Inc. All rights reserved.</p>

      </div>

    </div>
  )
}

export default Footer
