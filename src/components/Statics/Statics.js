import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Statics = () => {
    const statics = useLoaderData().data;
    console.log(statics);

    // console.log(sports);

    return (
        <div>


            <h4>this is statistics</h4>
        </div>
    );
};

export default Statics;