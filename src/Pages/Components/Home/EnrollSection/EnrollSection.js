import React from 'react';
import { Link } from 'react-router-dom';

const EnrollSection = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                        <h1 class="text-3xl font-bold">Enroll Now for FREE</h1>
                        <p class="py-6">Try our courses for FREE now! Start from<br />our most popular courses.</p>
                        </div>

                        </div>
                    </div>
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="text-2xl font-bold">Interactive Python Course</p>
                            <button class="btn btn-xs"><Link  to='/contactUs'>Enroll Course</Link> </button>
                        </div>
                        <figure><img src="https://cdn.programiz.com/cdn/farfuture/PDDmYjCe3Z6Y1-vMhhpgLouDI_V-PssqXquQlzk4AQo/mtime:1657542310/sites/all/themes/programiz/assets/pro-images/c-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="text-2xl font-bold">Interactive C Course</p>
                            <button class="btn btn-xs"><Link  to='/contactUs'>Enroll Course</Link> </button>
                        </div>
                        <figure><img src="https://cdn.programiz.com/cdn/farfuture/rlcYMksz4GHnOWVaD8XspoSqKpZQopegMpAazySOWC8/mtime:1657542310/sites/all/themes/programiz/assets/pro-images/python-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="text-2xl font-bold">Interactive Java Course</p>
                            <button class="btn btn-xs"><Link  to='/contactUs'>Enroll Course</Link> </button>
                            
                        </div>
                        <figure><img src="https://cdn.programiz.com/cdn/farfuture/LWwTGcx7YuLVCWVr3XlLu57edLcz7apWkWXpOqe5urw/mtime:1655726012/sites/all/themes/programiz/assets/pro-images/java-image.png" alt="Shoes" /></figure>
                        </div>
                    </div>
                    <div>
                        <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                        <button className="btn mr-5 my-8"> <Link class="font-bold" to='/courses'>View all  Course</Link> </button>
                        
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EnrollSection;