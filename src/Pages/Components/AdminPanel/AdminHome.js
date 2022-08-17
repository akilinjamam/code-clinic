import React from 'react';
import { Link } from "react-router-dom";
import html from "../../../Assets/adminIcon/html.png"
import css from "../../../Assets/adminIcon/css.png"
import js from "../../../Assets/adminIcon/js.png"
import cPlus from "../../../Assets/adminIcon/c++.png"

const AdminHome = () => {
    return (
        <div style={{ height: '500px', display: 'flex', justifyContent: 'center' }}>

            <div style={{ display: 'flex', width: '70%', margin: 'auto' }}>
                <Link to=""> <img className='w-1/2 mx-auto' src={html} alt="" /> </Link>
                <Link to=""> <img className='w-1/3 mx-auto' src={css} alt="" /> </Link>
                <Link to=""> <img className='w-1/2 mx-auto' src={js} alt="" /> </Link>
                <Link to=""> <img className='w-1/2 mx-auto' src={cPlus} alt="" /> </Link>
            </div>

        </div>
    );
};

export default AdminHome;