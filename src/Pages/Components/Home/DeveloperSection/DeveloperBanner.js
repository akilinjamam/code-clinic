import React from 'react';
import InterviewImg from "../../../../Assets/icons/interview.png"
import CoddingSkills from "../../../../Assets/icons/coding.png"

const DeveloperBanner = () => {
    return (
        <div class="hero mt-10">
            <div class="hero-content flex-col lg:flex-row">
                <div class="flex items-center flex-col lg:flex-row">
                    <div class="grid flex-grow sm:w-[50%] card rounded-box place-items-center">
                        <img className='w-[80px]' src={CoddingSkills} alt="CoddingSkills" />
                        <h3 class="text-lg font-bold text-[#CFD2CF] mt-6">FOR DEVELOPERS</h3>
                        <h3 class="text-4xl font-bold text-slate-700">Improve your coding skills.</h3>
                        <p class="py-6 text-[#8b8d8d]">As a developer we need to improve our coding skills. And to increase this skill we need different skill assessment. (You can improve your assessment by clicking the button below.)</p>
                        <button class="btn btn-primary">Try for free challenge</button>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow sm:w-[50%] card rounded-box place-items-center">
                        <img className='w-[70px]' src={InterviewImg} alt="InterviewImg" />
                        <h3 class="text-lg font-bold text-[#CFD2CF] mt-1">FOR INTERVIEWER</h3>
                        <h3 class="text-4xl font-bold lg:text-sky-800">Interview and evaluate candidates.</h3>
                        <p class="py-6 text-[#8b8d8d]">If you are a candidate.You will be asked many types of questions, which you can see by clicking on the button below.</p>
                        <button class="btn btn-primary">7 day's free trial</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default DeveloperBanner;