import React from 'react'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import SideBar from '../../components/adminComponents/SideBar'
import UsersComponent from '../../components/adminComponents/UsersComponent'

export default function Users() {
  return (
    <div>
      <AdminNavbar/>
      <div  className='flex  w-[100%]  h-full'>
       <SideBar/>
       <UsersComponent/>
      </div>
    </div>
  )
}
