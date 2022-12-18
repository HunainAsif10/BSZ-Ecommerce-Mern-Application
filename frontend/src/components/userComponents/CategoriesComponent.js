import React from 'react'
import { categories } from '../../data'
import CategoriesComponentItem from './CategoriesComponentItem'
export default function CategoriesComponent() {
  return (
    <div>
      <h1 className='text-3xl text-[#000080] font-extrabold text-center py-3 border-b-3  border-b-4 w-3/4 pb-2 mx-auto border-[#000080] md:w-72'>Top Categories</h1>
      <div className='flex flex-wrap my-3'>
      {
          categories.map((item)=>{
              return <CategoriesComponentItem key={item.id} item={item}/>
            })
        }
        </div>
        
    </div>
  )
}
