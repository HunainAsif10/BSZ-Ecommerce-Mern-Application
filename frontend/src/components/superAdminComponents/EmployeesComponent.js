import React,{useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"
import { staffRows } from '../../superData';
export default function EmployeesComponent() {
    const [data,setData]=useState(staffRows)

    const handleDelete=(id)=>{
        console.log(id)
        setData(data.filter((item)=> item.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First Name', width: 120 },
        { field: 'lastName', headerName: 'last Name', width: 120 },
        { field: 'role', headerName: 'Role', width: 100 },
        { field: 'contact', headerName: 'Contact Number', width: 120 },
        { field: 'salary', headerName: 'Salary',type:"number", width: 100 },
        { field: 'date', headerName: 'Joining Date', width: 130 },
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
        <Link to="/newEmployee">
        <span className="bg-[#002fa7] p-3 text-white text-lg rounded font-bold cursor-pointer"> Add Staff <GroupsIcon/></span>
        </Link>

     </div>
     <h1 className="text-black font-semibold text-2xl text-center pt-5">Staff</h1>
     <div className='mt-6 ml-5 md:w-[36rem] w-[17rem] pr-4  lg:w-[60rem]' style={{ height: 400 }}>
      <DataGrid
        rows={staffRows}
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
