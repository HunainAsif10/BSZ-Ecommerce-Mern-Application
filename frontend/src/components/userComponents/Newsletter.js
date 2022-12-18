import React from 'react'
import SendIcon from '@mui/icons-material/Send';
export default function Newsletter() {
  return (
    <div className='bg-[#000080] text-white pl-3 pt-4 md:h-72 md:flex md:flex-col md:pt-8 '>
      <h1 className="font-extrabold text-2xl text-center md:text-5xl">Newsletter</h1>
      <p className="md:text-center md:py-4 md:text-2xl">Get timely updates from your favorite products</p>
      <div className="input flex item-center justify-center w-2/3 pt-3 pb-4 text-center  md:mx-auto"   >
        <input className="focus:outline-none text-[#000080] flex-9 p-2 md:w-[90%]" type="text" placeholder='Enter Your Email' />
        <SendIcon className="text-[#000080] cursor-pointer bg-white flex-1   " style={{fontSize:"30px",height:"40px"}}/>

      </div>
    </div>
  )
}
