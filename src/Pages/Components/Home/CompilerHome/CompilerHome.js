import React from 'react';
import { useNavigate } from 'react-router-dom';
// import CompilerHome from '../CompilerHome/Com';

const CompilerHome = () => {
    const navigate = useNavigate()

    return (
        <div className="container mx-auto">
            <div className=' grid grid-cols-2 gap'>
                <div className=" bg-slate-100">
                    <img src="https://i.ibb.co/FsTbWP7/compiler.png" alt="" />
                </div>
                <div className=" bg-slate-100">

                    <h1 className='text-4xl text-center mt-10'>Run Your Code With Our Compiler</h1>

                    <div onClick={() => {
                        navigate("/Editor");
                    }}
                        className='grid grid-cols-2 gap-10  mt-8 '>
                        <div onClick={() => {
                            navigate("/Editor");
                        }} className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>JavaScript</h1>
                        </div>
                        <div onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>HTML</h1>
                        </div>
                        <div onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>CSS</h1>
                        </div>
                        <div onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>C++</h1>
                        </div>
                        <div onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>Python</h1>
                        </div>
                        <div onClick={() => {
                            navigate("/Editor");
                        }}
                            className='btn text-black hover:text-white  p-8 shadow-lg bg-white text-center font-bold rounded-md compiler'>
                            <h1>C</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompilerHome;