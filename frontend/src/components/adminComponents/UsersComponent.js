import React,{useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import { userRows } from '../../adminData';
export default function UsersComponent() {
    const [data,setData]=useState(userRows)

    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id!==id))

    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userName', headerName: 'User tName', width: 130  },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'contact', headerName: 'Contact', width: 130 },
    
        {
          field: 'action',
          headerName: 'Action',
          width:130,
          renderCell:(params)=>{
            return (
                <div className="space-x-3">
                  <Link to={"/user/"+params.row.id}>
                <RemoveRedEyeIcon className="text-gray-400"/>
                  </Link>
                <BorderColorIcon className="text-green-500"/>
                <DeleteOutlineIcon onClick={()=>{handleDelete(params.row.id)}} className="text-red-500 cursor-pointer"/>
                </div>
            )
          }
        },
      ];
  return (
    <div>
        <div className="cat mt-5 ml-16">
        <Link to="/newUser">
        <span className="bg-[#1b74e4] p-3 text-white text-lg rounded font-bold cursor-pointer"> Add Users<PeopleAltIcon/></span>
        </Link>

     </div>
     <h1 className="text-black font-semibold text-2xl text-center pt-5">Users</h1>
     <div className='mt-6 ml-5 md:w-[36rem] w-[17rem] pr-4  lg:w-[40rem]' style={{ height: 400 }}>
      <DataGrid
        rows={userRows}
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
