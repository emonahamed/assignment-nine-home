import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Header from '../Header/Header';

const Statics = () => {
    const statics = useLoaderData().data;
    console.log(statics);

    // console.log(sports);

    return (
        <div>
            <LineChart width={350} height={350} data={statics}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>


            </LineChart>
        </div>
    );
};

export default Statics;