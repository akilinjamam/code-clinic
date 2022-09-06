import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../SharedPage/Footer/Loader';

const MakeAdmin = () => {


    const [user, setUser] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])



    return (
        <div className='ml-5 mt-10'>
            {user?.map((u, index) =>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>delete</th>

                            </tr>
                        </thead>
                        <tbody>



                            <tr class="hover">
                                <th>{index + 1}</th>
                                <td>{u.user}</td>
                                <td> <button className='btn btn-xs'>Make Admin</button> </td>
                                <td><button className='btn btn-xs'>Delete</button></td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            )}
        </div>
    );
};

export default MakeAdmin;