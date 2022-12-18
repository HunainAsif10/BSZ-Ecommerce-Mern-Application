import React,{useState} from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { accountRows } from '../../superData';
export default function AccountsComponent() {
    const [data,setData]=useState(accountRows)

    const handleDelete=(id)=>{
        console.log(id)
        setData(data.filter((item)=> item.id!==id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'accountTitle', headerName: 'Account Title', width: 120 },
        { field: 'iban', headerName: 'IBAN', width: 140 },
        { field: 'bankName', headerName: 'Bank Name', width: 140 },
        { field: 'balance', headerName: 'Balance',type:"number", width: 180 },
       
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
       <div className="cat mt-5 md:ml-16 ml-7">
       <Link to="/newAccount">
        <span className="bg-[#002fa7] p-3 text-white text-lg rounded font-bold cursor-pointer"> Add Accounts <MonetizationOnIcon/></span>
        </Link>
         </div>
         <div className="store flex flex-col ml-3 mt-6 md:flex-row md:space-x-3 px-2 w-52 md:w-[40rem]">
         <div className="item bg-amber-600 text-white flex flex-col px-2 mt-5 ml-2 py-2 w-full md:w-52 rounded">
            <h1 className='text-lg font-bold '>Total Balance <span>Rs</span><span className="px-3 text-black">100000000 </span> </h1>
            <PointOfSaleIcon style={{fontSize:"30px"}}/>
         </div>
         <div className="item bg-indigo-700 text-white flex flex-col px-2 mt-5 ml-2 py-2 md:w-52 rounded">
            <h1 className='text-lg font-bold '>Income <span>Rs</span><span  className="px-3">12000000</span> </h1>
            <CloudUploadIcon style={{fontSize:"30px"}}/>
         </div>
         <div className="item bg-red-500 text-white flex flex-col px-2 mt-5 ml-2 py-2 md:w-52 rounded">
            <h1 className='text-lg font-bold '>Expense <span>Rs</span><span  className="px-3">222222</span> </h1>
            <DownloadForOfflineIcon  style={{fontSize:"30px"}}/>
         </div>
         </div>

         <h1 className="text-black font-semibold text-2xl text-center pt-5">Accounts</h1>
     <div className='mt-6 ml-5 md:w-[36rem] w-[17rem] pr-4  lg:w-[60rem]' style={{ height: 400 }}>
      <DataGrid
        rows={accountRows}
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
