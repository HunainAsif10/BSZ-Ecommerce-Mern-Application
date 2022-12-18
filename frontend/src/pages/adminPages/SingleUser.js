import React from 'react'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import SideBar from '../../components/adminComponents/SideBar'

export default function SingleUser() {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex  w-[100%]  h-full'>
      <SideBar/>
    </div>
    </div>
  )
}
