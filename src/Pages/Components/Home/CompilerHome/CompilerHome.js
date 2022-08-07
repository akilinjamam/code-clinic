import React from 'react';
import { useNavigate } from 'react-router-dom';
// import CompilerHome from '../CompilerHome/Com';

const CompilerHome = () => {
    const navigate = useNavigate()

    return (
        <div className=" bg-base-200 mx-auto">
            <div className=' grid grid-cols-2 gap'>
                <div>
                    <img src="https://i.ibb.co/FsTbWP7/compiler.png" alt="" />
                </div>
                <div >

                    <h1 className='text-4xl text-center mt-10'>Run Your Code With Our Compiler</h1>

                    <div
                        className='grid grid-cols-2 gap-10 mt-28 '>
                        <button onClick={() => {
                            navigate("/Editor");
                        }} className='btn  text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>JavaScript</h1>
                        </button>
                        <button onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>HTML</h1>
                        </button>
                        <button onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>CSS</h1>
                        </button>
                        <button onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>C++</h1>
                        </button>
                        <button onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>Python</h1>
                        </button>
                        <button onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white justify-center shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>C</h1>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompilerHome;