import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../Assets/img/error.png';

const NotFound = () => {
    return (
        <div>
            <img className='bg-cover w-screen' src={error} alt="ErrorPic" />
            <Link to='/' className='block text-center' >Go Back</Link>
        </div>
    );
};

export default NotFound; 