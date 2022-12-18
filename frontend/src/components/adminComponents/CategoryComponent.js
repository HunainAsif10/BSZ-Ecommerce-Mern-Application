import React, { useState } from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import { categoryRows } from '../../adminData';

export default function CategoryComponent() {
    
    const [data,setData]=useState(categoryRows)

    const handleDelete=(id)=>{
        console.log(id)
        setData(data.filter((item)=> item.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'category', headerName: 'Category Name',type:'number', width: 130,renderCell:(params)=>{
               return (
                <div className="flex items-center ">
                   <img className='w-8 h-8 rounded-full  border-2 border-black mr-3 object-cover' src={params.row.avatar} alt="" />
                   {params.row.categoryName}
                </div>
               )
        } },
        { field: 'products', headerName: 'Products', width: 130 },
        {
          field: 'action',
          headerName: 'Action',
          width:130,
          renderCell:(params)=>{
            return (
                <div className="space-x-3">
                <Link to={"/adminCategory/"+params.row.categoryName}>
                <RemoveRedEyeIcon className="text-gray-400"/>
                </Link>
                <DeleteOutlineIcon onClick={()=>{handleDelete(params.row.id)}} className="text-red-500 cursor-pointer"/>
                </div>
            )
          }
        },
      ];
      
   
      
  return (
    <div>
     <div className="cat mt-5 ml-16">
        <Link to="/newCategory">
        <span className="bg-[#1b74e4] p-3 text-white text-lg rounded font-bold cursor-pointer"> Add Category <CategoryIcon/></span>
        </Link>

     </div>
     <h1 className="text-black font-semibold text-2xl text-center pt-5">Categories</h1>
     <div className='mt-6 ml-5 md:w-[36rem] w-[17rem] pr-4  lg:w-[40rem]' style={{ height: 400 }}>
      <DataGrid
        rows={categoryRows}
        columns={columns}
        checkboxSelection
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>

    </div>
  )
}
