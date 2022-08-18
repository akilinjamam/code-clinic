import React from 'react';
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <br />
                <h2 className="text-4xl flex justify-center font-bold text-primary">
                    Admin Panel
                </h2>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">

                    <li><Link to="">Make Admin from users</Link></li>
                    <li><Link to="/adminDashboard/adminHome">Create Courses Sub-section</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;