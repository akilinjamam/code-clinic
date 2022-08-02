import React from 'react';

const JavascriptCourse = () => {
    return (
        <div>
            <h2 className='text-4xl text-primary mb-3'>Javascript Course</h2>
            <div className='flex justify-around'>
          <div>
          <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Topics</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Introduction</td>
        
      </tr>
    </tbody>
  </table>
</div>
          </div>
          <div className=' w-2/3'>
          <h1 className='text-2xl font-bold my-3'>What is Javascript?</h1>
          <p>JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.</p>
          </div>
        </div>
        </div>
    );
};

export default JavascriptCourse;