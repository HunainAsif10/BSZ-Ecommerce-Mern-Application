import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {Link} from 'react-router-dom';
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import Chart from '../../components/adminComponents/Chart'
import SideBar from '../../components/adminComponents/SideBar'

export default function AdminHome() {
  return (
    <div >
      <AdminNavbar />
      <div className="flex  w-[100%]  md:min-h-screen">
      <SideBar/>
      <div className="flex flex-col flex-[3]">

        <div className='buttons md:items-center flex flex-col mt-5 ml-3 md:h-54 w-64 md:w-[800px] pl-4 space-y-4 md:flex-row md:space-x-5 p-3'>
          <Link to="/newProduct">
            <button className="bg-[#1b74e4]  text-white text-lg rounded font-bold cursor-pointer  p-2 w-60"> Add Products <ProductionQuantityLimitsIcon/></button>
          </Link>

          <Link to="/newCategory">
            <button className="bg-[#1b74e4]  text-white text-lg rounded font-bold cursor-pointer  p-2 w-60"> Add Categories <CategoryIcon/></button>
            </Link>
            <Link to="/newUser">
            <button className="bg-[#1b74e4]  text-white text-lg rounded font-bold cursor-pointer p-2 w-60"> Add Users <PeopleAltIcon/></button>
            </Link>
        </div>
        
       <Chart/>
      </div>
      </div>
    </div>
  )
}
