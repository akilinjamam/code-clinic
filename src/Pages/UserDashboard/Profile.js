import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
console.log(user)

    return (
        <div className='w-[95%] mx-auto bg-slate-200 rounded-xl divide-y-4 divide-slate-400'>
            <div className='flex justify-between px-10 h-16 items-center'>
                <h3 className="text-3xl font-semibold">My Profile</h3>
                <button className=''>Edit</button>
            </div>
            <div className="hero p-5">
                <div className="hero-content flex-col md:flex-row ">
                    <div>
                        <img className='w-[200px] rounded-full' src={user?.photoURL} alt='user' /><br />
                        <button className="btn btn-primary mt-5 ml-10">edit profile</button>
                    </div>
                    <div className='md:ml-20'>
                        <h1 className="text-md font-semibold">Full Name:</h1>
                        <p className='mb-3'>{user?.displayName}</p>
                        <h1 className="text-md font-semibold">Email Address:</h1>
                        <p className='mb-3'>{user?.email}</p>
                        <h1 className="text-md font-semibold">Student ID:</h1>
                        <p className='mb-3'>{user?.uid}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;