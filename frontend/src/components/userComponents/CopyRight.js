import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function CopyRight() {
  return (
    <div className="bg-[#000080] flex  flex-col md:flex-row md:justify-between md:px-10 items-center space-y-1 py-3">
      <div className='left text-white space-x-2'>
        <CopyrightIcon/>
        <span>All Rights are Reserved</span>
      </div>
      <div className="right text-white space-x-2">
        <span >Developed By</span>
        <a className="text-lg font-serif cursor-pointer border-b-2 border-white"  href="https://www.facebook.com/" target="_blank" rel="noreferrer">Bathall</a>
      </div>

    </div>
  )
}
