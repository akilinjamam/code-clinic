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

        <div className='flex'>
            <div className='mt-10'>
                {
                    user && <div className="navbar-end">
                        <label tabIndex="1" className="btn btn-ghost lg:hidden" htmlFor="dashboard-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" /></svg></label>
                    </div>
                }
            </div>
            <div className="w-[90%] mx-auto my-5">
                <div className="drawer drawer-mobile">
                    <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* <!-- Page content here --> */}

                        <Outlet />

                    </div>
                    <div className='bg-slate-700 rounded-3xl'>
                        <div className="drawer-side mt-3 mx-auto">
                            <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                            <ul className="menu overflow-y-auto w-80 pt-10  text-white ">
                                {/* <!-- Sidebar content here --> */}
                                <div className='pb-10'><img className='mx-auto rounded-full' src={user?.photoURL} alt="" /></div>
                                <li><Link to="/dashboard" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>My Profile</Link></li>
                                {user && <>
                                    <li><Link to="/dashboard/education" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Education</Link></li>
                                    <li><Link to="#" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Skill Set</Link></li>
                                    <li><Link to="/dashboard/education" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>Course</Link></li>
                                    <li><Link to="#" className=' hover:bg-slate-900 py-2 mb-2 rounded-2xl'>My Courses</Link></li>
                                </>}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;