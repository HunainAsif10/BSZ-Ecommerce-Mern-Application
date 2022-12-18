import React from 'react'

export default function AddStaffComponent() {
  return (
    <div>
      <h1 className='ml-6 text-[#002fa7] font-bold text-2xl border-b-4 w-28 border-[#002fa7] pt-3'>Add Staff</h1>
      <form action="" className="pl-4 pt-6 md:flex md:flex-wrap md:w-[600px] md:mx-auto">
        <div className="formItem flex flex-col w-52 pt-2 md:mr-4">
            <label htmlFor="" className='text-lg text-[#002fa7] font-semibold pb-2'>First Name</label>
            <input className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="text" placeholder='First Name' />
        </div>
        <div  className="formItem flex flex-col w-52 pt-2  md:mr-4">
            <label  className='text-lg text-[#002fa7] font-semibold pb-2' htmlFor="">Last Name</label>
            <input  className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="text" placeholder='Last Name' />
        </div>
        <div className="formItem flex flex-col w-52 pt-2  md:mr-4">
            <label  className='text-lg text-[#002fa7] font-semibold pb-2' htmlFor="">Role</label>
            <input  className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="text" placeholder='Manager' />
        </div>
        <div  className="formItem flex flex-col w-52 pt-2  md:mr-4">
            <label  className='text-lg text-[#002fa7] font-semibold pb-2' htmlFor="">Contact Number</label>
            <input  className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="number" placeholder='+923001111111' />
        </div>
        <div  className="formItem flex flex-col w-52 pt-2  md:mr-4">
            <label  className='text-lg text-[#002fa7] font-semibold pb-2' htmlFor="">Salary</label>
            <input  className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="number" placeholder='1200000' />
        </div>
        <div className="formItem flex flex-col w-52 pt-2  md:mr-4">
            <label  className='text-lg text-[#002fa7] font-semibold pb-2' htmlFor="">Date</label>
            <input  className='border-2 py-2 px-2 rounded-xl border-[#002fa7] focus:outline-none' type="text" placeholder='12-09-2020' />
        </div>
      </form>
        <button className="text-white bg-[#002fa7] rounded font-bold  ml-2 text-lg py-2 px-3 mt-3 ">Submit</button>
    </div>
  )
}
