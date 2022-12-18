import React from 'react'
import EmployeesComponent from '../../components/superAdminComponents/EmployeesComponent'
import SuperNavBar from "../../components/superAdminComponents/SuperNavBar"
import SuperSideBar from '../../components/superAdminComponents/SuperSideBar'

export default function Employees() {
  return (
    <div>
      <SuperNavBar/>
      <div className='flex  w-[100%]  h-full'>
        <SuperSideBar/>
        <EmployeesComponent/>
      </div>
    </div>
  )
}
