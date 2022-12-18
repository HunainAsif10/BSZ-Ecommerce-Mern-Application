import React from 'react'

export default function AddCategoryComponent() {
  return (
    <div>
       <h1 className="text-[#1b74e4] font-semibold text-2xl pt-4 pl-12 border-b-4 border-[#1b74e4] w-72 py-4  ">Add New Categories</h1>
       <form action=""  >
        <div className="formItem flex flex-col px-3 py-2 w-56 md:w-96  ">
           <label className="text-lg pb-3 font-bold text-[#1b74e4]" htmlFor="">Category Name</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none" type="text" placeholder='Category Name' />
        </div>
        <div className="formItem flex flex-col px-3 py-2 w-56">
           <label  className="text-lg pb-3 font-bold text-[#1b74e4]" htmlFor="">Category Title Image</label>
            <input className="w-64" type="file" />
        </div>
        <button className="text-white mt-4 bg-[#1b74e4] p-2 text-lg rounded ml-3">Add Category</button>
       </form>
    </div>
  )
}
