import React from 'react'
import { category } from '../../data'
import ShowCaseitem from './ShowCaseitem'
export default function ShowCase() {
  return (
    <div>
      <h1 className="text-2xl text-center  font-bold text-[#000080] border-b-4 w-1/2 pb-2 mx-auto border-[#000080] md:w-56">Treding Categories</h1>
      <div className="pt-4 flex flex-col bg-blue-300 mx-4 my-4 text-[#000080] font-semibold md:flex-row md:flex-wrap ">

      {
          category.map((item)=>{
              return <ShowCaseitem key={item.id}  item={item} />
            })
        }
        </div>
    </div>
  )
}
