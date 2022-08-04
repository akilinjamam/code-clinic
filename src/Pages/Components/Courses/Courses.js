import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-6xl flex justify-center font-bold text-primary">
          Courses
        </h2>

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/courses" className="font-bold">
              HTML Course
            </Link>
          </li>
          <li>
            <Link to="/courses/javascriptcourse" className="font-bold mt-1">
              Javascript Course
            </Link>
          </li>
          <li>
            <Link to="/courses/c++" className="font-bold">
              C++ Course
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
