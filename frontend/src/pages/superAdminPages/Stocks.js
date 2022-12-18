import React from 'react'
import StocksComponent from '../../components/superAdminComponents/StocksComponent'
import SuperNavBar from '../../components/superAdminComponents/SuperNavBar'
import SuperSideBar from '../../components/superAdminComponents/SuperSideBar'

export default function Stocks() {
  return (
    <div>
      <SuperNavBar/>
      <div className='flex  w-[100%]  h-full'>
        <SuperSideBar/>
        <StocksComponent/>
      </div>
    </div>
  )
}
