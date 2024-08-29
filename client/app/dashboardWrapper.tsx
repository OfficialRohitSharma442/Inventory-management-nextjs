import React from 'react'
import Navbar from "@/app/(components)/Navbar";

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
   <div className='flex bg-gray-50 text-gray-900 min-h-screen'>
    <Navbar />
     SideBar
    <main className='flex flex-col w-full h-full py-7 px-7 bg-gray-50 md:pl-24'>
      {children}</main>
   </div>
   
  )
}

export default DashboardWrapper
