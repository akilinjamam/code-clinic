import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link to='/'>
                <img className='bg-cover w-screen' src="https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif" alt="ErrorPic" />
            </Link>
        </div>
    );
};

export default NotFound; 