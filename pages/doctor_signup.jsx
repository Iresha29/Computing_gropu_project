
import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaGoogle,FaRegEnvelope,FaUser} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'

const doctor_signup = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <div className='flex flex-col items-center justify-center w-full flex-2 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-blue-500 mb-2'>Create Account</h2>
              <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>

              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedinIn className='text-sm' />
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm' />
                </a>
              </div>

              <p className='text-gray-400 my-3'>or use your email for registration</p>

              <div className='flex flex-col items-center'>

                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <AiOutlineUser className='text-gray-400 m-2'/>
                  <input type='text' name='docid' placeholder='ID' className='bg-gray-100 outline-none text-sm'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2'/>
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input type='password' name='cpassword' placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm'/>
                </div>

                <a href='#' className='border-2 border-blue-500 text-blue-500 rounded-full px-11 py-1 font-semibold hover:bg-blue-500 hover:text-white'>Create Account</a>
              
              </div>
            </div>
          </div>
          
          <div className='w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-16 mb-2'>
            <img src="/images/opd-logo.png" alt='logo' height={250} width={250} className='item-center item'/>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='mb-2 text-base'><b>Caring for you</b> beyond borders</p>
            <br/>
            <p className='mb-2'>Already have an account?</p>
            <a href='#' className='border-2 border-white rounded-full px-11 py-1 font-semibold hover:bg-white hover:text-blue-500'>Sign in</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default doctor_signup
