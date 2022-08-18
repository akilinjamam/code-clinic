import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CplusplusCourses = () => {
    return (
        <div>
            <div class="drawer drawer-mobile z-10">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <h2 className="text-6xl flex justify-center font-bold text-primary">
                        Courses
                    </h2>
                    <Outlet></Outlet>
                    <div className='text-center'>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden m-5 ">Open drawer</label>
                    </div>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <button className="btn btn-primary"> <Link to="/cplusPlusCourses">C++ Course</Link> </button>



                        <li>
                            <Link to="/cplusPlusCourses" className="font-bold">
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="font-bold">
                                C++ Syntex
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="font-bold">
                                C++ comments
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="font-bold">
                                C++ Variables
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="font-bold">
                                C++ User Input
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CplusplusCourses;