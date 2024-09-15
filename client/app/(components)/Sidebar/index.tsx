"use client"
import { Menu } from 'lucide-react'
import React from 'react'
const Sidebar = () => {
  // console.log(themes);
  return (
    <div>
      <div className='flex justify-between md:justify-normal items-center pt-8 '>
        <div>logo </div>
        <h3 className='font-extrabold text-2xl text-nowrap'>ED Stock</h3>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => { }}>
          <Menu className='w-4 h-4' />
        </button>
      </div>
      {/* Links */}
      <div className="flex-grow mt-8">

      </div>
      {/* Footer */}
      <div className='text-center text-xs text-gray-500'>
        <p>&copy;2024 EDStock</p>
      </div>
    </div>
  )
}

export default Sidebar
