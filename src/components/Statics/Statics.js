import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Header from '../Header/Header';

const Statics = () => {
    const statics = useLoaderData().data;


    return (
        <div>
            <ResponsiveContainer width={'90%'} height={350}>
                <LineChart height={350} data={statics}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>


                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statics;