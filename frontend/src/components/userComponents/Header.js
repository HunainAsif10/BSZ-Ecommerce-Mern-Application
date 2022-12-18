import React from 'react'
import { Link} from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header() {
  return (
    <div className="hidden  md:flex justify-between h-11 items-center px-3 py-2 bg-[#f0f2f5] ">
      <div className="left my-3 ml-4 ">
        <div className="links space-x-2 cursor-pointer">
          <FacebookOutlinedIcon className="cursor-pointer hover:text-[#1b74e4]"/>
          <InstagramIcon className="cursor-pointer hover:text-[#8a3ab9]"/>
          <TwitterIcon className="cursor-pointer hover:text-[#1DA1F2]"/>
          <PinterestIcon className="cursor-pointer hover:text-[#c8232c]"/>
          <LinkedInIcon className="cursor-pointer hover:text-[#0072b1]"/>
        </div>
      </div>
      <div className="right flex items-center space-x-3">
        <div >

        <span className='px-3'><WhatsAppIcon className="cursor-pointer mr-1  hover:text-[#25D366]"/>+92134123134</span>
        </div>


       <Link to="/login">
        <button className="text-white font-bold bg-[#000080] text-sm  border-3  p-1 hover:text-black hover:bg-[#f0f2f5]">Login</button>

       </Link> 
       <Link to="/register">
       <button className="text-black font-bold text-sm border-2 p-1 ">Register</button>
       </Link>
    

      </div>
    </div>
  )
}
