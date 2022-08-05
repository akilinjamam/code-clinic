import React from 'react';
import EditorPic from "../../../Assets/img/Editor.png"

const Editor = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className="text-4xl text-green-500 font-semibold text-center">JavaScript Code Editor</h1>
            </div>
            <div className='mb-10'>
                <img  src={EditorPic} alt="" />
            </div>
        </div>
    );
};

export default Editor;