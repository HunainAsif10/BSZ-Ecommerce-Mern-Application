import React from 'react'
import AccountsComponent from '../../components/superAdminComponents/AccountsComponent'
import SuperNavBar from '../../components/superAdminComponents/SuperNavBar'
import SuperSideBar from '../../components/superAdminComponents/SuperSideBar'

export default function Accounts() {
  return (
    <div>
      <SuperNavBar/>
      <div className='flex  w-[100%]  h-full'>
        <SuperSideBar/>
        <AccountsComponent/>
      </div>
    </div>
  )
}
