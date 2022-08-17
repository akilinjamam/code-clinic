import React from 'react';
import { Link } from 'react-router-dom';
import right from "../../../../Assets/icons/right-tick.png";
import wrong from "../../../../Assets/icons/cross-mark (1).png";

const PaidCourse = () => {
  return (
<div className='mt-0 pt-0'>

    <div class="hero p-4">
   
      <div className='hero-content flex-col lg:flex-row'>
      <div class="card  w-96  bg-[url('https://img1.picmix.com/output/stamp/normal/3/0/4/6/1846403_0dc06.gif')] bg-base-100 shadow-2xl drop-shadow-lg drop-shadow-md">
          <div class="card-body">
            <h2 class="text-amber-500 text-3xl font-bold text-center">
            PRO
            </h2>
            <h1 className='text-4xl text-amber-900 font-bold text-center py-3'>$29</h1>
            <p className='text-sm mt-2 py-2 '>Interested to learn new topic but not sure if you should dive in and invest right now? then give a short to our one month free trial and decide later.</p>
            <ol className='text-sm mt-4 ml-3 list-decimal'>
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">One month Free Trial</p>
              </li>
              <br />
             
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">15 Quiz per topic</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Browse Forum</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={wrong}  alt=''/>
              <p className=" mt-2">Vote Solution</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={wrong}  alt=''/>
              <p className=" mt-2">Suggest Courses</p>
              </li>
              <br />

            </ol>
            <button class="btn btn-sm"><Link class="font-bold" to='/signUp'>Try it out</Link></button>
            <div class="card-actions justify-end">
            <div class="badge badge-secondary">NEW</div> 
            </div>
          </div>
        </div>


        
         <div class="card  w-96 mx-5 bg-[url('https://img1.picmix.com/output/stamp/normal/3/0/4/6/1846403_0dc06.gif')] bg-base-100 shadow-2xl drop-shadow-lg drop-shadow-md">
          <div class="card-body">
            <h2 class="text-amber-500 text-3xl font-bold text-center">
            PRO PLUS
            </h2>
            <h1 className='text-4xl text-amber-900 font-bold text-center py-3'>$39</h1>
            <p className='text-sm mt-2 py-2 '>Satisfied with our pre-offered package and courses and want to get some more in a budget friendly package.</p>
            <ol className='text-sm mt-4 ml-3 list-decimal'>
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">One month Free Trial</p>
              </li>
              <br />
             
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">15 Quiz per topic</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Browse Forum</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Vote Solution</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={wrong}  alt=''/>
              <p className=" mt-2">Suggest Courses</p>
              </li>
              <br />

            </ol>
            <button class="btn btn-sm"><Link class="font-bold" to='/signUp'>Try it out</Link></button>
            <div class="card-actions justify-end">
            <div class="badge badge-secondary">NEW</div> 
            </div>
          </div>
        </div>



         <div class="card  w-96 mx-5 bg-[url('https://img1.picmix.com/output/stamp/normal/3/0/4/6/1846403_0dc06.gif')] bg-base-100 shadow-2xl drop-shadow-lg drop-shadow-md">
          <div class="card-body">
            <h2 class="text-amber-500 text-3xl font-bold text-center">
            ADVANCE
            </h2>
            <h1 className='text-4xl font-bold text-amber-900 text-center py-3'>$49</h1>
            <p className='text-sm mt-2 py-2 '>Want the most out from the courses according to your test ? Then the por  pus plan is for you.</p>
            <ol className='text-sm mt-4 ml-3 list-decimal'>
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">One month Free Trial</p>
              </li>
              <br />
             
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">15 Quiz per topic</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Browse Forum</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Vote Solution</p>
              </li>
              <br />
              
              <li className='my-2 inline-flex'>
              <img src={right} className=" " alt=''/>
              <p className=" mt-2">Suggest Courses</p>
              </li>
              <br />

            </ol>
            <button class="btn btn-sm"><Link class="font-bold" to='/signUp'>Try it out</Link></button>
            <div class="card-actions justify-end">
            <div class="badge badge-secondary">NEW</div> 
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default PaidCourse;