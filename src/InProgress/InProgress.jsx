import React from 'react';


const InProgress = () => {
    return (
        <div className='flex justify-center gap-6 py-20'>
            <div className='w-[626px] h-[250px] bg-gradient-to-r
             from-[#5F56FF] via-[#8E4DF5] to-[#7AB2FF]'>
                <div className='mt-18'>
                    <h3 className='text-3xl text-white text-center mt-11-'>InProgress</h3>
                    <h2 className='text-white text-6xl text-center mt-4'>0</h2>
                </div>
                ·
            </div>
            <div className='w-[626px] h-[250px] border-2 bg-gradient-to-r
             from-[#5F56FF] via-[#8E4DF5] to-[#7AB2FF]'>
                <div className='mt-18'>
                    <h3 className='text-3xl text-white text-center mt-11-'
                    >Resolved</h3>
                    <h2 className='text-white text-6xl text-center mt-4'>0</h2>
                </div>
            </div>
        </div>
    );
};

export default InProgress;