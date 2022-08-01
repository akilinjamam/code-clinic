import React from 'react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
    const languages = [
        { id: 1, name: 'Learn Python' },
        { id: 2, name: 'Learn SQL' },
        { id: 3, name: 'Learn Java' },
        { id: 4, name: 'Learn JavaScript' },
        { id: 5, name: 'Learn C++' },
        { id: 6, name: 'Learn C' },
        { id: 7, name: 'Learn Go' },
        { id: 8, name: 'Learn More' }
    ];
    const navigate = useNavigate()
    const navigateServiceDetails = id => {
        navigate(`/learn/${id}`)
    }

    return (
        <div class="hero mt-10 bg-base-100 justify-center lg:justify-start">
            <div class="hero-content flex-col lg:flex-row lg:fle">
                <div className='md:w-[400px] lg:pr-10'>
                    <h3 className="text-3xl font-bold text-center lg:text-start">Choose what to learn</h3>
                    <p className="pt-5 text-center hidden lg:block sm:text-justify lg:pr-10">Start learning programming language of your choice.</p>
                </div>
                <div className='grid pt-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center font-semibold'>
                    {
                        languages.map(language => <button
                            key={language.id}
                            class="border border-green-300 rounded-3xl p-3 hover:scale-125 hover:duration-200 hover:bg-slate-50"
                            onClick={() => navigateServiceDetails(language.id)}
                        >{language.name}</button>)   
                    }
                </div>
            </div>
        </div>
    );
};

export default Learn;