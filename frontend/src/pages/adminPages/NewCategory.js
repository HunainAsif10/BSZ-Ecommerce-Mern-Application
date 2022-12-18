import React from 'react'
import AddCategoryComponent from '../../components/adminComponents/AddCategoryComponent'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import SideBar from '../../components/adminComponents/SideBar'

export default function NewCategory() {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex  w-[100%]  h-full'>
      <SideBar/>
      <AddCategoryComponent/>   
      </div> 
    </div>
  )
}
