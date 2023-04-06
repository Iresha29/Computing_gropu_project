import React from 'react';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-white via-green-600 to-blue-700 shadow-xl xl:container xl:mx-auto flex items-center px-5 h-15 w-screen fixed top-0 left-0'>
      <img src="/images/opd-logo.png" alt='logo' height={120} width={120}/>

      <div className='ml-auto flex flex-row xl:gap-5 text-white'>
        <p className='cursor-pointer hover:font-bold'>Eng</p>
        <p className='cursor-pointer hover:font-bold'>සිංහල</p>
        <a href='#'><FaUserCircle color="#FFFFFF" size={30}/></a>
      </div>
      
    </div>
      
    </>
  )
}

export default Navbar
