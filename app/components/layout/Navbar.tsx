import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center sticky top-0 shadow-md h-10 bg-[rgb(8,81,156)] text-[rgb(236,231,242)]'>
        <div className='flex justify-evenly h-full'>
            <div className='flex justify-center items-center px-3 h-ful hover:bg-white/4'><img src="Logo" alt="Logo" /></div>
            <button className='hover:shadow-md px-3 h-full hover:bg-white/4'>Feed</button>
            <button className='hover:shadow-md px-3 h-full hover:bg-white/4'>Profile</button>
        </div>
        <div className='h-full'>
            <button className='hover:shadow-md px-3 h-full hover:bg-white/4'>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar