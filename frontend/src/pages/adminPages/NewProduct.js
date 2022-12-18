import React from 'react'
import AdminAddProduct from '../../components/adminComponents/AdminAddProduct'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import SideBar from '../../components/adminComponents/SideBar'

export default function NewProduct() {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex  w-[100%]  h-full'>
      <SideBar/>
      <AdminAddProduct/>
      
      </div>
    </div>
  )
}
