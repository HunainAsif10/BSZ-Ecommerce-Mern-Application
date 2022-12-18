import React from 'react'
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function SideBar() {
  return (
    <div className="">
        <ul className="bg-[#f0f2f5] w-16 min-h-screen  flex flex-col space-y-8 md:justify-center  md:w-40   md:space-y-6 pl-2 pt-4 pb-3 text-[#1b74e4] flex-[1]  ">
            
          <Link to="/admin">  <li className=" cursor-pointer flex flex-col   md:flex-row md:items-center md:py-3 hover:text-blue-400 md:px-2"><HomeIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Home</span></li></Link>
          <Link to="/adminCategory"> <li className=" cursor-pointer flex flex-col   md:flex-row md:items-center md:py-3 hover:text-blue-400 md:px-2"><CategoryIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl md:hidden">Categ.</span><span className="w-12 md:text-xl md:flex hidden">Categories</span></li></Link>
          <Link to="/users"> <li className=" cursor-pointer flex flex-col   md:flex-row md:items-center md:py-3 hover:text-blue-400 md:px-2"><PeopleAltIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Users</span></li></Link>
           <Link to="/orders"> <li className=" cursor-pointer flex flex-col    md:flex-row md:items-center md:py-3 hover:text-blue-400 md:px-2  "><AccountBalanceIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Orders</span></li></Link>
           <Link to="/"> <li className=" cursor-pointer flex flex-col    md:flex-row md:items-center md:py-3 hover:text-blue-400 md:px-2 border-b-4 border-blue-500"><ShoppingBasketIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Shop</span></li></Link>
           
           
            
        </ul>
    </div>
  )
}
