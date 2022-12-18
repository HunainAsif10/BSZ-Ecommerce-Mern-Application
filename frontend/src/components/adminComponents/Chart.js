import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User":2000
          
        },
        {
          name: 'Feb',
          "Active User":4000
          
        },
        {
          name: 'March',
          "Active User":3000
          
        },
        {
          name: 'April',
          "Active User":5000
          
        },
        {
          name: 'May',
          "Active User":2000
          
        },
        {
          name: 'June',
          "Active User":2000
          
        },
        {
          name: 'July',
          "Active User":2000
          
        },
        {
          name: 'August',
          "Active User":1000
          
        },
        {
          name: 'Sep',
          "Active User":2000
          
        },
        {
          name: 'Oct',
          "Active User":9000
          
        },
        {
          name: 'Nov',
          "Active User":8000
          
        },
        {
          name: 'Dec',
          "Active User":6000
          
        },
         
      ];
  return (
    <div className=' md:w-[600px] sm:w-96 lg:w-[800px]  md:h-96 md:px-7 w-72 h-[300px] md:ml-5 px-3 pb-3  md:pt-10' >
      <h3 className='text-center pb-5 text-xl font-bold '>User Analytics</h3>
        <ResponsiveContainer width="90%"  >
            <LineChart data={data}>
                <XAxis dataKey="name"/>
                <Line type="monotone" dataKey="Active User"/>
                <Tooltip/>
                <CartesianGrid strokeDasharray="5 5"/>
                <Legend/>
            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}
