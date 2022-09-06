import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const Intro = ({ activate }) => {
    const [introData, setIntroData] = useState([])
    console.log(introData.length)
    useEffect(() => {
        // const url = "htmlIntro.json"
        const url = "http://localhost:5000/htmlIntro"
        fetch(url)
            .then((res) => res.json())
            .then((data) => setIntroData(data))
    }, [])
    return (
        <div >
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>


            <div className='bg-gray-100'>
                {
                    introData.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description1 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description1/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example1 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example1/${dataFlow._id}`}>Update</Link>
                                </div>}



                                {dataFlow.topic2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description2 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description2/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example2 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example2/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description3 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description3/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example3 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example3/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description4 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description4/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example4 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example4/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/topic5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/title5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description5 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/description5/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example5 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlIntro/example5/${dataFlow._id}`}>Update</Link>
                                </div>}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default Intro;