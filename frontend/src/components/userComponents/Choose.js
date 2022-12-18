import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import BiotechIcon from '@mui/icons-material/Biotech';
export default function Choose() {
  return (
    <div>
      <h1 className="text-2xl w-1/2  mx-auto font-bold text-[#000080] py-4 mb-3 text-center border-b-2 border-[#000080] md:w-52 ">Why Choose <span>Us</span>?</h1>
      <div className="flex flex-col mx-auto w-4/5 mb-3 py-3 md:flex-row md:pt-4 bg-[#f0f2f5] md:my-4">
        <div className="flex flex-col items-center py-2 "><ThumbUpIcon className="border-t-2 text-[#000080] rounded-full border-[#000080] p-4" style={{fontSize:"90px"}}/>
        <span className="text-lg text-[#000080] font-semibold">Quality</span>
        <p className="text-lg text-center w-[70%] text-[#000080]">Lorem ipsum dolor sit amet uidem libero. Laborum quam amet molestias! Nisi architecto deserunt omnis asperiores!</p>
        </div>
        <div className="flex flex-col items-center py-2 "><FavoriteIcon className="border-t-2 text-[#000080] rounded-full border-[#000080] p-4" style={{fontSize:"90px"}}/>
        <span className="text-lg text-[#000080] font-semibold">Commitment</span>
        <p className="text-lg text-center w-[70%] text-[#000080]">Lorem ipsum dolor sit amet uidem libero. Laborum quam amet molestias! Nisi architecto deserunt omnis asperiores!</p>
        </div>
        <div className="flex flex-col items-center py-2 "><GroupsIcon className="border-t-2 text-[#000080] rounded-full border-[#000080] p-4" style={{fontSize:"90px"}}/>
        <span className="text-lg text-[#000080] font-semibold">Professional</span>
        <p className="text-lg text-center w-[70%] text-[#000080]">Lorem ipsum dolor sit amet uidem libero. Laborum quam amet molestias! Nisi architecto deserunt omnis asperiores!</p>
        </div>
        <div className="flex flex-col items-center py-2 "><BiotechIcon className="border-t-2 text-[#000080] rounded-full border-[#000080] p-4" style={{fontSize:"90px"}}/>
        <span className="text-lg text-[#000080] font-semibold">Innovation</span>
        <p className="text-lg text-center w-[70%] text-[#000080]">Lorem ipsum dolor sit amet uidem libero. Laborum quam amet molestias! Nisi architecto deserunt omnis asperiores!</p>
        </div>
         
      </div>
    </div>
  )
}
