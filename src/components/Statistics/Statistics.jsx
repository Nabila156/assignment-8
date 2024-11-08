import React from 'react';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <h1 className='text-center font-bold text-red-600 text-6xl my-10'>No Data Found</h1>
        </div>
    );
};

export default Statistics;