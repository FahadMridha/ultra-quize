import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const dataType=useLoaderData()
    // console.log(dataType.data);
    const data = dataType.data
    return (
        
        <div className='mt-28'>
            
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                </LineChart>
            {/* </ResponsiveContainer> */}
            
        </div>
    );
};

export default Statistics;