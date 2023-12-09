import React from 'react';
import loginImg from '../Images/login.webp';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className='bg-black mx-auto felx flex'>
        <div className='text-white flex flex-col my-10  gap-6 flex-[0.5] p-10'>
            <div className='text-richblack-25 text-4xl mx-4'>Welcome Back</div>
            <div className='text-richblack-300 mx-4'>"Unlock the power of collaboration with our note-sharing platform – where ideas converge and knowledge transcends boundaries."</div>
            <div className='flex flex-col items-start gap-4'>
                <div className='flex bg-richblack-700 w-fit mx-4 text-lg text-white  rounded-lg p-1'>
                    <div className=' bg-black p-1 px-3 text-white font-bold flex justify-between items-center rounded-lg'>Student</div>
                    <div className=' p-1 px-3 flex justify-between items-center font-bold  rounded-lg'>Teacher</div>
                </div>
                <div className='w-full px-4 text-lg text-richblack-50 flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Email Addresss<sup className='text-[#FF0000]'>*</sup></label>
                        <input className='bg-richblack-700 rounded-md p-1 px-2' placeholder='Enter email address' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Password<sup className='text-[#FF0000]'>*</sup></label>
                        <input className='bg-richblack-700 rounded-md p-1 px-2' placeholder='Enter Password' type="text" />
                    </div>
                </div>
            </div>
            <div className='bg-yellow-50 my-2 text-black rounded-md text-2xl text-center h-12 flex justify-center items-center mx-4'>Sign In</div>
        </div>
        <div className='flex justify-center items-center flex-[0.5]'>
            <img  className='h-96' src={loginImg} alt="" />
        </div>
    </div>
  )
}

export default Signin