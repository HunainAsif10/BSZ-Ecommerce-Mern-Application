import React from 'react'

export default function SuperNavBar() {
  return (
    <div className="bg-[#002fa7] text-white h-16 flex justify-between items-center px-3">
       <div className="prodile">
        <span className="text-lg font-semibold">Abc</span>
       </div>
       <div className="logo">
        <img className='w-12 h-12  ' src="img/logo.png" alt="" />
       </div>
       <div className="button">
        <button className='text-white border-2 border-white p-[5px] rounded font-bold bg-[#002fa7]'>Logout</button>
       </div>
    </div>
  )
}
