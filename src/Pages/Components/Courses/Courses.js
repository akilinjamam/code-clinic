import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h2 className='text-6xl flex justify-center font-bold text-primary'>Courses</h2>
    <Outlet/>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/courses' className='font-bold'>HTML Course</Link></li>
      <li><Link to='/courses/javascriptcourse' className='font-bold mt-1'>Javascript Course</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Courses;