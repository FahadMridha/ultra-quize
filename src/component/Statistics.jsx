import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const dataType=useLoaderData()
    // console.log(dataType.data);
    const data = dataType.data
    return (
        
        <div className='mt-16'>
            
            <LineChart height={300} width={500} data={data} >
                <Line type="monotone" dataKey='total' stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#ccc" />

            </LineChart>
            
        </div>
    );
};

export default Statistics;