import React from 'react'
import SuperNavBar from '../../components/superAdminComponents/SuperNavBar'
import SuperSideBar from '../../components/superAdminComponents/SuperSideBar'

export default function SuperHome() {
  return (
    <div>
      <SuperNavBar/>
      <div className='flex  w-[100%]  h-full'>
        <SuperSideBar/>
      </div>
    </div>
  )
}
