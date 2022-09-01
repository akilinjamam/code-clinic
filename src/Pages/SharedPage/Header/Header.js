import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import logo from "../../../Assets/icons/letter-c.png";
import login from "../../../Assets/icons/login.png";
import admin from "../../../Assets/icons/admin.png";
import user_2 from "../../../Assets/icons/user_2.png";



const Header = () => {

  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };


  return (


    <div className="primaryshadow-lg">
      <div className="navbar text-black">

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 text-neutral shadow rounded-box w-52" >
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
                <ul className="text-neutral ml-3">
                  <li>
                    <Link to='/courses' >HTML</Link >
                  </li>
                  <li>
                    <Link to='/jsCourses' >Javascript</Link>
                  </li>
                  <li>
                    <Link to='/CssCourses' >CSS</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <p to='/interview' className="justify-between">
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
                </p>
                <ul className="text-neutral">
                  <li>
                    <Link to='/quiz' >Skill Tests</Link>
                  </li>
                  <li>
                    <Link to='/interview-prep'>Interview Preparation</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex="0" className="">
                {user ? <><div><p className="pr-6">User Dashboard</p><svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg></div>
                  <ul className="p-5 text-white bg-slate-800 ml-[-200px] mt-14">
                    <div className="w-[200px] flex flex-col text-white">
                      <Link className="py-1 pl-2 mb-1  rounded-md" to='/dashboard'>Profile</Link>
                      <Link className="py-1 pl-2 mb-1  rounded-md" to='#'>Student-Analytics</Link>
                      <Link className="py-1 pl-2 mb-1  rounded-md" to='#'>Announcement</Link>
                      <button className="py-1 pl-2 mb-1  rounded-md text-start " onClick={logout}>Log Out</button>
                    </div>
                  </ul></> : (<Link to="login" className="pr-6">Log In</Link>)
                }

              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-2xl text-neutral"><span><img className="logo" src={logo} alt="" /></span>oders Clinic</Link>
        </div>
        <div className="navbar-end mr-10 hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <Link to='/courses' className=" text-neutral">
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
              <ul className="p-2 z-20 text-neutral">
                <li className="">
                  <Link to='/courses'>HTML</Link>
                </li>
                <li className="">
                  <Link to='/jsCourses'>Javascript</Link>
                </li>
                <li className="">
                  <Link to='/CssCourses' >CSS</Link>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <p className="text-neutral">
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
              <ul className="p-2 z-20 text-neutral">
                <li className="">
                  <Link to='/quiz'>Skill Tests</Link>
                </li>
                <li className="">
                  <Link to='/interview-prep' >Interview Preparation</Link>
                </li>

              </ul>
            </li>

            <li>
              <Link to='/adminDashboard/adminHome' ><img style={{ width: '30px' }} src={admin} alt="" /></Link>
            </li>
            <li tabIndex="0" className=" relative">
              {user ? <><div>{user.photoURL ? <img className="icon p-0 rounded-full" src={user?.photoURL} alt="user" /> : <img className="icon p-0 rounded-full" src={user_2} alt="user" />}</div>
                <ul className="p-5 text-white absolute right-[-50px]">
                  <div className="w-[200px] flex flex-col text-white">
                    <Link className="py-1 pl-2 mb-1 rounded-md" to='/dashboard'>View Profile</Link>
                  </div>
                </ul></> : (<Link to="login" className="">
                  <div><img style={{ width: '30px' }} src={login} alt="" /></div>
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
