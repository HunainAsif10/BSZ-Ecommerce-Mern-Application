import React from 'react'

export default function RegisterComponent() {
  return (
    <div>
      <h1 className='text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-1/2 mx-auto md:w-52 py-4'>Register Yourself</h1>
      <p className='text-center font-semibold text-lg text-[#000080]'>Connect With Us</p>
      <form action="" className='mx-4 md:mx-auto md:w-5/6'>
        <div className="formItem  flex items-center pt-3">
          <label className='text-[#000080] pr-10 text-xl' htmlFor="">Name</label>
          <input className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="text"  placeholder='Enter Your Name'/>
        </div>
        <div className="formItem flex items-center pt-3">
          <label className='text-[#000080] text-xl pr-11' htmlFor="">Email</label>
          <input className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="email"  placeholder='Enter Your Email'/>
        </div>
        <div className="formItem flex items-center pt-3">
          <label className='text-[#000080] pr-3 text-xl' htmlFor="">Password</label>
          <input className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="text"  placeholder='Enter Your Password'/>
        </div>
        <div className="formItem flex items-center pt-3">
          <label className='text-[#000080] text-xl pr-6' htmlFor="">Contact</label>
          <input className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="Number"  placeholder='Enter Your Contact Number'/>
        </div>
        <button className='text-white bg-[#000080] w-24 py-3 my-5 rounded text-lg'>Register</button>
      </form>

    </div>
  )
}
