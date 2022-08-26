import React from 'react';

const Recap = () => {
    return (
        <div className='px-12 pb-7 bg-base-200 '>
            <div class="grid grid-cols-2 sm:grid-cols-4  gap-4 ">
                <div>
                    <div class="card bg-base-100  hover:shadow-pink-300 shadow-xl">
                        <div class="card-body text-center">
                            <h2 class="text-4xl font-bold text-rose-600">370</h2>
                            <p class="text-2xl font-bold text-purple-900">Total Quiz</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-100 hover:shadow-green-200 shadow-xl">
                        <div class="card-body text-center">
                            <h2 class="text-4xl font-bold text-rose-600">21</h2>
                            <p class="text-2xl font-bold text-purple-900">Total Course</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-100  hover:shadow-pink-300 shadow-xl">
                        <div class="card-body text-center">
                            <h2 class="text-4xl font-bold text-rose-600">1k+</h2>
                            <p class="text-2xl font-bold text-purple-900">Quiz Enrolled</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card bg-base-100 hover:shadow-green-200  shadow-xl">
                        <div class="card-body text-center">
                            <h2 className='text-4xl font-bold text-rose-600'>2k+</h2>
                            <p class="text-2xl font-bold text-purple-900">Course Enrolled</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recap;