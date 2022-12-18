import React from 'react'

export default function CategoriesComponentItem({item}) {
  return (
    <div>
        <div className='border-2 rounded-2xl sm:w-[150px] sm:h-[150px] mx-3 my-7 pt-4 md:w-[300px] md:h-[200px]'>
           
        <img className='w-1/2   h-5/6 object-contain mx-auto' src={item.image} alt="" />
        <button className=' w-[100%]  bg-[#000080] py-3  text-white  text-2xl cursor-pointer '>{item.title}</button>
          
        </div>

    </div>
  )
}
