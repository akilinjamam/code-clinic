import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit} = useForm();

    const onSubmit = () => {

        console.log("name, email, description")
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div className='w-[95%] mx-auto bg-slate-200 rounded-xl divide-y-4 divide-slate-400 pb-10'>
            <div className='flex justify-between px-10 h-16 items-center'>
                <h3 className="text-3xl font-semibold">Add Review</h3>
            </div>
            <div>
                <div className='card w-60 sm:w-96 bg-slate-300  mx-auto py-16 my-5 shadow-xl shadow-slate-700'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label input-group input-group-vertical py-1">Your Name </label>
                            <input
                                type="text"
                                value={user?.displayName}
                                className="input w-full"
                                 disabled/>
                    </div>
                    <div className="form-control w-3/4 mx-auto">
                        <label className="label input-group input-group-vertical py-1">Review Details</label>
                            <textarea
                                type="text"
                                placeholder="Write Your Comments"
                                className="input input-bordered w-full pt-2"
                                {...register("reviewDetails", {
                                    required: {
                                        value: true,
                                        message: 'Enter Product reviewDetails'
                                    },
                                    maxLength: {
                                        value: 200,
                                        message: "Please enter under 200 character"
                                    },
                                    minLength: {
                                        value: 60,
                                        message: "Please enter proper product reviewDetails"
                                    }
                                })} />
                    </div>

                    <div className="form-control mt-6 w-2/4 mx-auto">
                        <input className="btn btn-primary" type="submit" value='Submit' />
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddReview;