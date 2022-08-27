import React from 'react';

const Summary = () => {
    return (
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-11/12 mx-auto text-center">
            <div className='summary'>
                <div className='bg-blue-300 box'>
                    <h1 className="font-bold text-3xl text-orange-800">350</h1>
                    <p className='text-3xl text-blue-900 font-semibold'>Total Quiz</p>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-300 box'>
                    <h1 className="font-bold text-3xl text-orange-800">20</h1>
                    <p className='text-3xl text-blue-900 font-semibold'>Total Course</p>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-300 box'>
                    <h1 className="font-bold text-3xl text-orange-800">2k+</h1>
                    <p className='text-3xl text-blue-900 font-semibold'>Quiz Enrolled</p>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-300 box'>
                    <h1 className="font-bold text-3xl text-orange-800">10k</h1>
                    <p className='text-3xl text-blue-900 font-semibold'>Enrolled</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;