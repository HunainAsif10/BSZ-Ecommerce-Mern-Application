import React from 'react'

export default function LoginComponent() {
  return (
    <div>
        <h1 className='text-3xl text-[#000080] font-extrabold text-center py-3 border-b-3  border-b-8 w-1/3 pb-2 mx-auto border-[#000080] md:w-40 '>Login</h1>
        <form action="" className='mx-4 my-4 pt-10 md:mx-auto md:w-5/6'>
            <div className="formitem my-3 flex  items-center  ">
                <label className='text-lg text-[#000080] pr-7' htmlFor="">Email</label>
                <input className=' focus:outline-none py-2 px-2 mx-3 border-b-2 border-[#000080] md:w-3/4'  type="email" placeholder='Enter Your Email' />
            </div>
            <div className="formitem flex items-center pt-6">
                <label  className='text-lg text-[#000080]' htmlFor="">Password</label>
                <input  className=' focus:outline-none py-2 px-2 mx-3 border-b-2 border-[#000080] md:w-3/4'  type="password" placeholder='Enter Your Password' />
            </div>
            <button className='text-white  bg-[#000080] py-2 px-2 rounded w-40 my-3 md:my-6 mx-auto'>Login</button>
        </form> 
    </div>
  )
}
