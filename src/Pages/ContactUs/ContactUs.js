import React from 'react';
import Icon from '../../Assets/icons/interview.png'

const ContactUs = () => {
    return (
        <div className='mt-10 '>
            <h1 className='text-4xl'>Contact ours Developers</h1>
            <div className='grid gap-5 grid-cols-3 mt-10' >
               
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Jannat Nurry</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Jannat Nurry:<br/></span>Hello I am Jannat Nurry...</p>
                </div>
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Injaman Islam</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Injaman Islam:<br/></span>Hello I am Injaman Islam...</p>
                </div>
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Sorowar Islam</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Sorowar Islam:<br/></span>Hello I am Sorowar Islam...</p>
                </div>
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Md Al-Amin Hossain</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Md Al-Amin Hossain:<br /></span>Hello I am Md Al-Amin Hossain...</p>
                    <div></div>
                </div>
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Parvez Mia</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Parvez Mia:<br /></span>Hello I am Parvez Mia...</p>
                    <div></div>
                </div>
                <div className='m-0 mx-auto'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Icon}  alt=""/>
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-zinc-500'>Morshid Mahbub</h4>
                    <p>MERN DEVELOPER</p>
                    <p><span>About Morshid Mahbub:<br /></span>Hello I am Morshid Mahbub...</p>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;