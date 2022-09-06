import React from 'react';
import scrollBtn from '../../../Assets/icons/scroll.png';

const ScrollBtn = () => {


const toTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
});


    return (
      <div>
        <img className='scroll-btn' src={scrollBtn} alt="scroll to up button" />
      </div>
       
    );
};

export default ScrollBtn;