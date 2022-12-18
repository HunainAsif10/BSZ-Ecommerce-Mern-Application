import React,{useState} from 'react'
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { stockRows } from '../../superData';
export default function StocksComponent() {
    const [data,setData]=useState(stockRows)

    const handleDelete=(id)=>{
        console.log(id)
        setData(data.filter((item)=> item.id!==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product Name', width: 120 },
        { field: 'categoryName', headerName: 'Category Name', width: 140 },
        { field: 'quantity', headerName: 'Quantity',type:"number", width: 100 },
        { field: 'price', headerName: 'Price',type:"number" , width: 120 },
        { field: 'value', headerName: 'Value',type:"number", width: 100 },
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
       <Link to="/newStock">
        <span className="bg-[#002fa7] p-3 text-white text-lg rounded font-bold cursor-pointer"> Add Stock <GroupWorkIcon/></span>
        </Link>
         </div>
         <div className="store flex flex-col ml-5 mt-6 md:flex-row md:space-x-3">
         <div className="item bg-green-400 text-white flex flex-col px-2 mt-5 ml-2 py-2 md:w-52 rounded">
            <h1 className='text-lg font-bold '>Total Products <span className="px-3">1000</span> </h1>
            <ProductionQuantityLimitsIcon style={{fontSize:"30px"}}/>
         </div>
         <div className="item bg-[teal] text-white flex flex-col px-2 mt-5 ml-2 py-2 md:w-52 rounded">
            <h1 className='text-lg font-bold '>Total categories<span  className="px-3">24</span> </h1>
            <CategoryIcon style={{fontSize:"30px"}}/>
         </div>
         <div className="item bg-red-500 text-white flex flex-col px-2 mt-5 ml-2 py-2 md:w-52 rounded">
            <h1 className='text-lg font-bold '>Out of Stock Product<span  className="px-3">1</span> </h1>
            <CancelIcon style={{fontSize:"30px"}}/>
         </div>
         </div>

         <h1 className="text-black font-semibold text-2xl text-center pt-5">Stocks</h1>
     <div className='mt-6 ml-5 md:w-[36rem] w-[17rem] pr-4  lg:w-[60rem]' style={{ height: 400 }}>
      <DataGrid
        rows={stockRows}
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
