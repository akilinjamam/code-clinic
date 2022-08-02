import React from "react";
import { Link} from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabindex="0">
                <Link to='/courses' className="justify-between">
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
                </Link>
                <ul className="p-2">
                  <li>
                    <Link to='/htmlcourse' >HTML</Link >
                  </li>
                  <li>
                    <Link to='javascriptcourse' >Javascript</Link>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a href="www.google.com" className="justify-between">
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
                </a>
                <ul className="p-2">
                  <li>
                    <a href="www.google.com">Skill Tests</a>
                  </li>
                  <li>
                    <a href="www.google.com">Mock Interview</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to='/' class="btn btn-ghost normal-case text-xl">Coders Clinic</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabindex="0">
              <Link to='/courses'>
                Courses
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
              <ul className="p-2">
                <li>
                  <Link to='/htmlcourse'>HTML</Link>
                </li>
                <li>
                  <Link to='/javascriptcourse'>Javascript</Link>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a href="www.google.com">
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
              </a>
              <ul class="p-2">
                <li>
                  <a href="www.google.com">Skill Tests</a>
                </li>
                <li>
                  <a href="www.google.com">Mock Interview</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <button className="btn " onClick={logout}>
              Sign Out
            </button>
          ) : (
            <a href="login" class="btn">
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
