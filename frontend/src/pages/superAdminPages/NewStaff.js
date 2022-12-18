import React from 'react'
import AddStaffComponent from '../../components/superAdminComponents/AddStaffComponent'
import SuperNavBar from '../../components/superAdminComponents/SuperNavBar'
import SuperSideBar from '../../components/superAdminComponents/SuperSideBar'

export default function NewStaff() {
  return (
    <div>
       <SuperNavBar/>
      <div className='flex  w-[100%]  h-full'>
        <SuperSideBar/>
        <AddStaffComponent/>
      </div>
    </div>
  )
}
