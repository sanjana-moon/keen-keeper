import React from 'react';
import { FadeLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <FadeLoader color="#244D3F" />
        </div>
    );
};

export default loading;