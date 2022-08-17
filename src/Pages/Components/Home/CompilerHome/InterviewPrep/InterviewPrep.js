import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InterviewPrep = () => {
    return (
        <div className="drawer drawer-mobile bg-slate-500">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className="text-6xl flex justify-center font-bold text-slate-800">
                    Interview Preparation
                </h2>
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open Side Bar
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 overflow-y-auto w-80 text-white bg-slate-800 shadow-sm shadow-white">
                    {/* <!-- Sidebar content here --> */}
                    <button className="btn bg-slate-500 disabled">Technologies</button>
                    <li>
                        <Link to="/interview-prep/javascript" className="font-bold hover:bg-slate-500">
                            Javascript
                        </Link>
                    </li>
                    <li>
                        <Link to="/interview-prep/html" className="font-bold hover:bg-slate-500">
                            HTML
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-bold hover:bg-slate-500">
                            CSS
                        </Link>
                    </li>

                    <li>
                        <Link to="" className="font-bold hover:bg-slate-500">
                            React
                        </Link>
                    </li>

                    <li>
                        <Link to="" className="font-bold hover:bg-slate-500">
                            Node.JS
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-bold hover:bg-slate-500">
                            Redux
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-bold hover:bg-slate-500">
                            MongoDB
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InterviewPrep;