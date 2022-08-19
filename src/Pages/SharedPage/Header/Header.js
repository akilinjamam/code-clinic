import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../Assets/icons/letter-c.png";
import login from "../../../Assets/icons/user.png";



const Header = () => {

  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (

    <div className="bg-gray-800 sticky top-0 z-30">
      <div className="navbar text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex="0">
                <p className="justify-between hover:bg-white hover:text-black">
                  Courses
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </p>
                <ul className="p-2 text-white hover:bg-white hover:text-black">
                  <li>
                    <Link to='/courses' >HTML</Link >
                  </li>
                  <li>
                    <Link to='/courses/javascriptCourse' >Javascript</Link>
                  </li>
                  <li>
                    <Link to='/courses/c++' >C++</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <Link to='/interview' className="justify-between">
                  Interview
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 text-white hover:bg-white hover:text-black">
                  <li>
                    <Link to='/quiz' >Skill Tests</Link>
                  </li>
                  <li>
                    <Link to='/interview-prep'  >Interview Preparation</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl text-white"><span><img className="logo" src={logo} alt="" /></span>oders Clinic</Link>
        </div>
        <div className="navbar-end mr-10 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <Link to='/courses' className=" hover:bg-white text-white hover:text-black">
                Course
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link >
              <ul className="p-2 z-20 text-white hover:bg-white hover:text-black">
                <li>
                  <Link to='/courses'>HTML</Link>
                </li>
                <li>
                  <Link to='/jsCourses'>Javascript</Link>
                </li>
                <li>
                  <Link to='/cplusPlusCourses' >C++</Link>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <p className=" hover:bg-white text-white hover:text-black">
                Interview
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>
              <ul className="p-2 text-white hover:bg-white hover:text-black">
                <li>
                  <Link to='/quiz'>Skill Tests</Link>
                </li>
                <li>
                  <Link to='/interview-prep' >Interview Preparation</Link>
                </li>
              </ul>
            </li>
            <label class="swap swap-rotate">
            <input type="checkbox" data-toggle-theme="light,dark" />
            <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          </label>
              <li tabIndex="0" className=" relative">
              {user ? <><div><img className="icon p-0 rounded-full" src={user?.photoURL} alt="user" /></div>
                <ul className="p-5 text-white absolute right-0 bg-slate-800">
                  <div className="w-[200px] flex flex-col text-white">
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='/dashboard'>Profile</Link>
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Student-Analytics</Link>
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Announcement</Link>
                    <button className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md text-start " onClick={logout}>Log Out</button>
                  </div>
                </ul></> : (<Link to="login" className="btn btn-ghost pt-2 hover:bg-white hover:text-black">
                  <div><img className="icon p-0" src={login} alt="" /></div>
                </Link>)
              }

            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Header;
