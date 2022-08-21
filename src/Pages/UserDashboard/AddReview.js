import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const review = {
            Name: user.displayName,
            Email: user.email,
            Comment: data.review
        };
        console.log(review)
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
                    <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] mx-auto'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Your Name</span>
                            </label>
                            <input
                                disabled
                                value={user?.displayName}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Your Comments</span>
                            </label>
                            <input type="text"
                                placeholder="Enter Your Comments"
                                className="input input-bordered w-full bg-slate-100"
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Enter Yours Comments'
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: 'must be 200 characters or lower' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-400">{errors.review && <span>{errors.review.message}</span>}</span>}
                                {errors.review?.type === 'maxLength' && <span className="label-text-alt text-red-400">{errors.review && <span>{errors.review.message}</span>}</span>}
                            </label>
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
