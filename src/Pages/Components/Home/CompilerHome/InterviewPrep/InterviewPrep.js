import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InterviewPrep = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-200 ">

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

                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-800 text-white">
                    {/* <!-- Sidebar content here --> */}
                    <button className="btn bg-slate-600  disabled">Technologies</button>
                    <li>
                        <Link to="" className="font-bold hover:bg-slate-600">
                            Javascript
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="font-bold hover:bg-slate-600">
                            HTML
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="font-bold hover:bg-slate-600">
                            CSS
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="font-bold hover:bg-slate-600">
                            React
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="font-bold hover:bg-slate-600">
                            Redux
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="font-bold hover:bg-slate-600">
                            Node.JS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InterviewPrep;