import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../Assets/icons/letter-c.png";
import login from "../../../Assets/icons/user.png";
import admin from "../../../Assets/adminIcon/admin.png";
import user_2 from "../../../Assets/icons/user_2.png";



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
              className="menu menu-compact dropdown-content mt-3 p-2 bg-slate-800 text-white shadow rounded-box w-52" >
              <li tabIndex="0">
                <p className="justify-between">
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
                <ul className="p-2">
                  <li>
                    <Link to='/courses' >HTML</Link >
                  </li>
                  <li>
                    <Link to='/courses/javascriptCourse' >Javascript</Link>
                  </li>
                  <li>
                    <Link to='/courses/c++' >CSS</Link>
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
              <li tabIndex="0" className="">
                {user ? <><div><p className="pr-6">User Dashboard</p><svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg></div>
                  <ul className="p-5 text-white bg-slate-800 ml-[-200px] mt-14">
                    <div className="w-[200px] flex flex-col text-white">
                      <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='/dashboard'>Profile</Link>
                      <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Student-Analytics</Link>
                      <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Announcement</Link>
                      <button className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md text-start " onClick={logout}>Log Out</button>
                    </div>
                  </ul></> : (<Link to="login" className="pr-6">Log In</Link>)
                }

              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl text-white"><span><img className="logo" src={logo} alt="" /></span>oders Clinic</Link>
        </div>
        <div className="navbar-end mr-10 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <Link to='/courses' className=" hover:bg-slate-900 text-white">
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
              <ul className="p-2 z-20 text-white bg-slate-800 hover:text-white">
                <li className="hover:bg-slate-900">
                  <Link to='/courses'>HTML</Link>
                </li>
                <li className="hover:bg-slate-900">
                  <Link to='/jsCourses'>Javascript</Link>
                </li>
                <li className="hover:bg-slate-900">
                  <Link to='/CssCourses' >CSS</Link>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <p className=" hover:bg-slate-900 text-white">
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
              <ul className="p-2 text-white hover:bg-slate-800">
                <li className="hover:bg-slate-900">
                  <Link to='/quiz'>Skill Tests</Link>
                </li>
                <li className="hover:bg-slate-900">
                  <Link to='/interview-prep' >Interview Preparation</Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to='/adminDashboard/adminHome' ><img style={{ width: '40px' }} src={admin} alt="" /></Link>
            </li>
            <li tabIndex="0" className=" relative">
              {user ? <><div>{user.photoURL ? <img className="icon p-0 rounded-full" src={user?.photoURL} alt="user" /> : <img className="icon p-0 rounded-full" src={user_2} alt="user" /> }</div>
                <ul className="p-5 text-white absolute right-[-50px] bg-slate-800">
                  <div className="w-[200px] flex flex-col text-white">
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='/dashboard'>Profile</Link>
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Student-Analytics</Link>
                    <Link className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md" to='#'>Announcement</Link>
                    <button className="py-1 pl-2 mb-1 hover:bg-slate-900 rounded-md text-start " onClick={logout}>Log Out</button>
                  </div>
                </ul></> : (<Link to="login" className="btn btn-link pt-2">
                  <div><img className="icon mt-2" src={login} alt="" /></div>
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
