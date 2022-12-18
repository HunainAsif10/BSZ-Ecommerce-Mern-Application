import React,{useState} from 'react'
import logo from '../../images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import {Link} from "react-router-dom";
export default function Navbar() {
  const [openLinks,setOpenLinks]=useState(true)
  return (
    <div className='md:flex md:justify-between md:items-center md:px-3  '>
      <div className="flex md:items-center bg-[#000080] justify-between pt-3 px-3 h-16 md:h-full md:bg-white">
      <div className="logo w-16 h-16 md:pt-2">
        <img src={logo} alt="" />
      </div>
      <div className="md:hidden">

      <MenuIcon onClick={()=>{setOpenLinks(!openLinks)}} className="text-white md:none cursor-pointer" style={{fontSize:"40px"}}/>
      </div>
      </div>
      <div className="links">
       {openLinks && <ul className="bg-[#f0f2f5] md:pr-11 md:bg-white flex flex-col md:flex-row items-center w-full h-64 md:h-full space-y-3 md:space-x-3 pt-2 font-bold md:pt-0 text-[#000080]  pb-3 ">
         <Link to="/"> <li className="text-lg hover:border-b-2 hover:border-[#000080] cursor-pointer pt-3" >Home</li></Link>
         <Link to="/about"> <li className="text-lg hover:border-b-2 hover:border-[#000080] cursor-pointer" >About</li></Link>
         <Link to="/categories"> <li className=" text-lg hover:border-b-2 hover:border-[#000080] cursor-pointer" >Categories</li></Link>
         <Link to="/contact">  <li className="hover:border-b-2 hover:border-[#000080] cursor-pointer" >Contact</li></Link>
         <Link to="/cart">  <li className="md:hidden"><ShoppingCartIcon/></li></Link>
         <Link to="/account"><li className="md:hidden"><PersonIcon/></li></Link>
        </ul>
        }
      </div>
      <div className="hidden md:block cursor-pointer space-x-3 pr-4  ">
        <PersonIcon className="text-[#000080]" style={{fontSize:"30px"}}/>
      <Badge badgeContent={4} color="primary">
        <Link to="/cart">
      <ShoppingCartIcon className="text-[#000080]"  style={{fontSize:"30px"}} />
        </Link>
    </Badge>
      </div>
    </div>
  )
}
