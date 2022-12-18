import React from 'react'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import AdminProductComponent from '../../components/adminComponents/AdminProductComponent'
import SideBar from '../../components/adminComponents/SideBar'


export default function AdminSingleCategory() {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex  w-[100%]  h-full'>
      <SideBar/>
      <AdminProductComponent/>
      
      </div>
    </div>
  )
}
