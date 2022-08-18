import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const JsCourses = () => {
    return (
        <div>
            <div class="drawer drawer-mobile z-10 bg-slate-500">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <h2 className="text-6xl flex justify-center font-bold text-slate-800">
                        Courses
                    </h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden">View Courses</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-800 text-white shadow-sm shadow-white">
                        {/* Sidebar Content */}
                        <button className="btn btn-slate-500 disabled"> <Link to="/jsCourses">Javascript Course</Link> </button>



                        <li>
                            <Link to="/jsCourses" className="font-bold hover:bg-slate-500">
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsSyntex" className="font-bold hover:bg-slate-500">
                                js Syntex
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsVariables" className="font-bold hover:bg-slate-500">
                                js Variables
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsLet" className="font-bold hover:bg-slate-500">
                                js Let
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsConst" className="font-bold hover:bg-slate-500">
                                js const
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default JsCourses;