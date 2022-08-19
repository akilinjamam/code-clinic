import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const Intro = () => {
    const [introData, setIntroData] = useState([])
    console.log(introData.length)
    useEffect(() => {
        const url = "htmlIntro.json"
        fetch(url)
            .then((res) => res.json())
            .then((data) => setIntroData(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
            <div align="right">
                <Link to="" className='btn btn-secondary mx-5'>Edit & Delete</Link>
            </div>
            <br /><br />
            <div>
                {
                    introData.map((dataFlow) =>
                        <div>
                            <div>
                                <div className='bg-gray-100' style={{ padding: '20px', borderRadius: '10px' }}>
                                    {dataFlow.topic && <p className="text-3xl font-bold">  {dataFlow.topic} </p>}
                                    <br />
                                    {dataFlow.title1 && <p className="text-2xl font-bold"> {dataFlow.title1} </p>}
                                    {dataFlow.description1 && <p> {dataFlow.description1} </p>}
                                    <br />
                                    {dataFlow.title2 && <p className="text-2xl font-bold"> {dataFlow.title2} </p>}
                                    {dataFlow.description2 && <p> {dataFlow.description2} </p>}
                                    <br />
                                    {dataFlow.title3 && <p className="text-2xl font-bold"> {dataFlow.title3} </p>}
                                    {dataFlow.description3 && <p> {dataFlow.description3} </p>}
                                    <br />
                                    {dataFlow.title4 && <p className="text-2xl font-bold"> {dataFlow.title4} </p>}
                                    {dataFlow.description4 && <p> {dataFlow.description4} </p>}

                                    <br />
                                    {dataFlow.title5 && <p className="text-2xl font-bold"> {dataFlow.title5} </p>}
                                    {dataFlow.description5 && <p> {dataFlow.description5} </p>}
                                    <br />
                                    <hr />
                                    <br />
                                    <p className="text-2xl font-bold"> {dataFlow.exampleTitle1} </p>
                                    <br />
                                    {dataFlow.example1 && <div className='flex bg-black justify-between p-2 rounded '>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>}


                                    <br />
                                    <p className="text-2xl font-bold"> {dataFlow.exampleTitle2} </p>
                                    <br />
                                    {dataFlow.example2 && <div className='flex bg-black justify-between p-2 rounded '>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>}
                                    <br />
                                    <p className="text-2xl font-bold"> {dataFlow.exampleTitle3} </p>
                                    <br />
                                    {dataFlow.example3 && <div className='flex bg-black justify-between p-2 rounded '>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>}
                                    <br />
                                    <p className="text-2xl font-bold"> {dataFlow.exampleTitle4} </p>
                                    <br />
                                    {dataFlow.example4 && <div className='flex bg-black justify-between p-2 rounded '>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>}
                                    <br />
                                    <p className="text-2xl font-bold"> {dataFlow.exampleTitle5} </p>
                                    <br />
                                    {dataFlow.example5 && <div className='flex bg-black justify-between p-2 rounded '>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Intro;