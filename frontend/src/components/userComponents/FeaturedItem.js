import React from 'react'

export default function FeaturedItem({item}) {
  return (
    <div className=" flex w-[90%] mx-auto my-3 md:mx-3  flex-col">
       <img className="w-full cursor-pointer hover:scale-[1.2] border-none h-60 object-contain border-b-2 py-2 px-3" src={item.image} alt="" />
       <h1 className="text-center py-2 font-bold text-lg text-white bg-[#000080]">{item.title}</h1>
       <span className="bg-[#000080] text-white text-lg text-center px-3">${item.price}</span>
      <button className='text-[#000080] w-full p-4 bg-white text-lg  font-semibold ' >Buy Now</button>
    </div>
  )
}
