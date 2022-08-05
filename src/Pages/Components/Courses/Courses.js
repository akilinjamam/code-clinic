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
        <Outlet />
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
          <button className="btn btn-primary disabled"> <Link to="/courses">HTML Course</Link> </button>
          <li>
            <Link to="" className="font-bold">
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/courses/attribute" className="font-bold">
              Attributes
            </Link>
          </li>
          <li>
            <Link to="/courses/htmlStyle" className="font-bold">
              Html Style
            </Link>
          </li>

          <li>
            <Link to="/courses/htmlImage" className="font-bold">
              Html Image
            </Link>
          </li>

          <li>
            <Link to="/courses/htmlCce" className="font-bold">
              HTML Quotation & Citation
            </Link>
          </li>
          <button className="btn btn-primary"> <Link to="/courses/javascriptCourse">Javascript Course</Link> </button>

          <li>
            <Link to="/courses/javascriptcourse" className="font-bold">
              Introduction
            </Link>
          </li>
          <li>
            <Link to="" className="font-bold">
              will be added
            </Link>
          </li>
          <li>
            <Link to="" className="font-bold">
              will be added
            </Link>
          </li>

          <li>
            <Link to="" className="font-bold">
              will be added
            </Link>
          </li>

          <li>
            <Link to="" className="font-bold">
              will be added
            </Link>
          </li>

          <button className="btn btn-primary"> <Link to="/courses/cpp"> C++ Course</Link> </button>


        </ul>




      </div>
    </div>
  );
};

export default Courses;
