import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const JsCourses = () => {
    return (
        <div>
            <div class="drawer drawer-mobile z-10">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <h2 className="text-6xl flex justify-center font-bold text-primary">
                        Courses
                    </h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <button className="btn btn-primary"> <Link to="/jsCourses">Javascript Course</Link> </button>



                        <li>
                            <Link to="/jsCourses" className="font-bold">
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsSyntex" className="font-bold">
                                js Syntex
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsVariables" className="font-bold">
                                js Variables
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsLet" className="font-bold">
                                js Let
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsConst" className="font-bold">
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