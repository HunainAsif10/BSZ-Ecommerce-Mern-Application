import React from 'react'
import {Link } from 'react-router-dom'
export default function CartComponent() {
  return (
    <div>
        <h1 className='text-3xl text-[#000080] font-extrabold text-center py-3 border-b-3  border-b-4 w-1/4 b-2 mx-auto border-[#000080] md:w-44'>Cart</h1>
        <Link to="/categories">
            <div className='  text-center mx-auto py-4 w-52'>

       <button className=' w-5/3 text-lg border-b-2 border-[#000080] py-2 '>Continue Shopping</button> 
            </div>
       </Link>

       <div className="products">
        <div className="item">
            <img src="img/product1.png" alt="" />
            <div className="info">
                        <span>Product ID</span>
                        <h1>#12345677</h1>
                    <span>Poduct Name</span>
                    <h1>Sccisor</h1>
            </div>
            <div className="quantity">
                
            </div>
             
        </div>
       </div>
    </div>
  )
}
