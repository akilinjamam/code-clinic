import React from 'react';
import { Link } from 'react-router-dom';

const EnrollSection = () => {




    return (
        <div className='mb-0 pb-0'>
            <h2 class=" text-5xl text-blue-900 font-bold text-center"> Take the best package </h2>
            <div class="hero bg-[url('https://i.pinimg.com/originals/7d/aa/11/7daa11df16b943f477c464a66b16e300.gif')] p-8 bg-base-200">

                <div class="hero-content flex-col lg:flex-row">
                    {/*Card -01  */}
                    <div className=''>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h1 class="text-3xl font-bold">Enroll Now for FREE</h1>
                                <p class="py-6">Try our courses for FREE now! Start from<br />our most popular courses.</p>
                            </div>
                        </div>
                    </div>
                    {/*Card -02  */}
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <p class="text-2xl font-bold">Interactive Python Course</p>
                                <button class="btn btn-xs btn-glass"><Link to='/contactUs'>Enroll Course</Link> </button>
                            </div>
                            <figure><img src="https://cdn.programiz.com/cdn/farfuture/PDDmYjCe3Z6Y1-vMhhpgLouDI_V-PssqXquQlzk4AQo/mtime:1657542310/sites/all/themes/programiz/assets/pro-images/c-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>
                    {/*Card -03  */}
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <p class="text-2xl font-bold">Interactive Java Course</p>
                                <button class="btn btn-xs btn-glass"><Link to='/contactUs'>Enroll Course</Link> </button>
                            </div>
                            <figure><img src="https://cdn.programiz.com/cdn/farfuture/LWwTGcx7YuLVCWVr3XlLu57edLcz7apWkWXpOqe5urw/mtime:1655726012/sites/all/themes/programiz/assets/pro-images/java-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>

                    {/*Card -04  */}
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <p class="text-2xl font-bold">Interactive C Course</p>
                                <button class="btn btn-xs btn-glass"><Link to='/contactUs'>Enroll Course</Link> </button>
                            </div>
                            <figure><img src="https://cdn.programiz.com/cdn/farfuture/rlcYMksz4GHnOWVaD8XspoSqKpZQopegMpAazySOWC8/mtime:1657542310/sites/all/themes/programiz/assets/pro-images/python-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>

                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body">
                                <button className="btn btn-glass mr-5 my-8"> <Link class="font-bold" to='/courses'>View all  Course</Link> </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnrollSection;