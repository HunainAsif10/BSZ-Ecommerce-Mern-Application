import React from 'react'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import CategoryComponent from '../../components/adminComponents/CategoryComponent'
import SideBar from '../../components/adminComponents/SideBar'

export default function AdminCategory() {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex  w-[100%]  h-full'>
      <SideBar/>
      <CategoryComponent/>
      </div>
    </div>
  )
}
