import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';

const UserProfile = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loader />
    }

    return (

        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {
                    user && <div className="flex justify-end mr-5">
                        <label tabIndex="1" className="p-2 lg:hidden" htmlFor="dashboard-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" /></svg></label>
                    </div>
                }
                {/* <!-- Page content here --> */}

                <Outlet />

            </div>
            <div className="drawer-side text-white">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-[200px] sm:w-80 pt-10 bg-slate-700">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard" className=' hover:bg-slate-900 py-2 mb-2'>My Profile</Link></li>
                    {user && <>
                        <li><Link to="/dashboard/my_course" className=' hover:bg-slate-900 py-2 mb-2'>My Course</Link></li>
                        <li><Link to="/dashboard/add_review" className=' hover:bg-slate-900 py-2 mb-2'>Add Reviews</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default UserProfile;