import React from 'react'

export default function ShowCaseitem({item}) {
  return (
    <div className=" mx-4 my-4 flex flex-col items-center pb-5 ">  
        <div className="w-[280px] h-[280px] bg-white rounded-full z-[1]"></div>
        <div className='absolute z-10 py-5 '>

           <img className="w-1/2 mx-auto p-6 object-contain hover:scale-[1.2] cursor-pointer" src={item.image} alt="" />
        </div>
        <button className="bg-white w-1/2 rounded py-3 mt-3" >{item.title}</button>
    </div>
  )
}