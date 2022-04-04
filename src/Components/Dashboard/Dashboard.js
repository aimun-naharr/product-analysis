import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
   const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 items-center justify-items-center mt-6 gap-4'>
            <div>
            <h1 className='text-3xl font-bold justify-center mb-8'>Revenue vs investment</h1>
            <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="investment" stroke="#ff7000" strokeWidth={2} />
          <Line type="monotone" dataKey="revenue" stroke="#0B3354" strokeWidth={2} />
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
            </div>
            <div>
            <h1 className='text-3xl font-bold justify-center mb-8'>Investments</h1>
            <BarChart width={400} height={400} data={data}>
          <Bar dataKey="investment" fill="#0B3354" />
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;