import React from 'react'

export default function AdminAddProduct() {
  return (
    <div>
        <h1 className="text-[#1b74e4] text-2xl font-bold pt-4 pl-8 border-b-4  w-56 ml-3 border-[#1b74e4]">Add Products</h1>
      <form action="" className="px-4 pt-4">
        <div className="formItem flex flex-col w-56 pb-3 md:w-96 ">
            <label className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Product Name</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='Product Name' />
        </div> 
        <div className="formItem flex flex-col w-56 pb-3 md:w-96">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Category Name</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='Category Name' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-96">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Quantity</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="number" placeholder='How Much' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-96">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Product Price</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="number" placeholder='Product Price' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-96">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Product Image</label>
            <input  type="file"  />
        </div>
        <button  className="bg-[#1b74e4] p-3 text-white text-lg rounded font-bold cursor-pointer">Add Product</button>
      </form>
    </div>
  )
}
