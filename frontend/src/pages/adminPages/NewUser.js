import React from 'react'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'
import NewUserComponent from '../../components/adminComponents/NewUserComponent'
import SideBar from '../../components/adminComponents/SideBar'

export default function NewUser() {
  return (
    <div>
      <AdminNavbar/>
      <div className=" flex  w-[100%]  h-full">
         <SideBar/> 
         <NewUserComponent/>
      </div>

    </div>
  )
}
