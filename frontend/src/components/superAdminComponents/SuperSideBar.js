import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FactoryIcon from '@mui/icons-material/Factory';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
export default function SuperSideBar() {
  return (
    <div>
      <ul className="bg-[#f0f2f5]  w-16  min-h-[100%] text-[#002fa7] px-2 md:w-40 ">
        <Link to="/super">
        <li className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <HomeIcon style={{fontSize:"30px"}}/> <span className='font-bold'>Home</span>
        </li>
        </Link>
        <Link to="/employees">
        <li className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <GroupsIcon style={{fontSize:"30px"}}/> <span className='font-bold'>Staff</span>
        </li>
        </Link>
        <Link to="/stocks">
        <li  className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <GroupWorkIcon/><span className="pr-3 hidden md:flex">Stocks</span><span className="md:font-bold md:hidden">Stk.</span>
        </li>
        </Link>
        <Link to="/accounts">
        <li   className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <MonetizationOnIcon/><span className="pr-3 font-bold hidden md:flex">Accounts</span><span className=" md:hidden">Acc.</span>
        </li>
        </Link>
        <Link>
        <li  className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <FactoryIcon/><span className="pr-3 font-bold hidden md:flex">Factory</span><span className=" md:hidden">Fac.</span>
        </li>
        </Link>
        <Link>
        <li  className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <AccountBalanceIcon/> <span className="">Order</span>
        </li>
        </Link>
        <Link to="/admin">
        <li className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <AdminPanelSettingsIcon/><span className="font-bold ">Admin</span> 
        </li>
        </Link>
        <Link to="/">
        <li  className="flex flex-col py-4 pl-[2px] text-lg font-semibold items-center md:flex-row md:ml-5 md:space-x-2 hover:text-blue-500">
            <ShoppingBasketIcon/><span className="font-bold">Shop</span>
        </li>
        </Link>
      </ul>
    </div>
  )
}
