import React from 'react';
import { Link } from 'react-router-dom';

const EnrollSection = () => {


//     // .flip-card {
//     background - color: transparent;
//     width: 300px;
//     height: 300px;
//     perspective: 1000px;
// }

// .flip - card - inner {
//     position: relative;
//     width: 100 %;
//     height: 100 %;
//     text - align: center;
//     transition: transform 0.6s;
//     transform - style: preserve - 3d;
//     box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// }

// .flip - card: hover.flip - card - inner {
//     transform: rotateY(180deg);
// }

// .flip - card - front, .flip - card - back {
//     position: absolute;
//     width: 100 %;
//     height: 100 %;
//     -webkit - backface - visibility: hidden;
//     backface - visibility: hidden;
// }

// .flip - card - front {
//     background - color: #bbb;
//     color: black;
// }

// .flip - card - back {
//     background - color: #2980b9;
//     color: white;
//     transform: rotateY(180deg);
// }
// </style >
// </head >
//     <body>

//         <h1>Card Flip with Text</h1>
//         <h3>Hover over the image below:</h3>

//         <div class="flip-card">
//             <div class="flip-card-inner">
//                 <div class="flip-card-front">
//                     <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
//                 </div>
//                 <div class="flip-card-back">
//                     <h1>John Doe</h1>
//                     <p>Architect & Engineer</p>
//                     <p>We love that guy</p>
//                 </div>
//             </div>
//         </div>


        return (
        <div>
            <div class="hero p-16 bg-base-200">
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