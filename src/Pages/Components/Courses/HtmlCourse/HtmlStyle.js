import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';


const HtmlStyle = () => {

    // const dataStyle = [
    //     {
    //         id: 3,
    //         topic: "HTML Styles",
    //         title1: "Background Color",
    //         title2: "Text Color",
    //         title3: "Fonts",
    //         title4: "Text Size",
    //         title5: "",
    //         description1: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
    //         description2: "The CSS color property defines the text color for an HTML element:",
    //         description3: "The CSS font-family property defines the font to be used for an HTML element:",
    //         description4: "The CSS font-size property defines the text size for an HTML element:",
    //         description5: "",
    //         exampleTitle1: "Example: Background Color",
    //         exampleTitle2: "Example: Text Color",
    //         exampleTitle3: "Example: Fonts",
    //         exampleTitle4: "Example: Text Size",
    //         exampleTitle5: "",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<p style='background-color:powderblue'></p>",
    //         example2: "<h1 style='color:blue;'>This is a heading</h1>",
    //         example3: "<p style='font-family:courier'>This is a paragraph.</p>",
    //         example4: "<h1 style='font-size:300%;'>This is a heading</h1>",
    //         example5: "",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     },
    // ]

    const [dataaStyle, setDataStyle] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/htmlStyle';
        fetch(url).then(res => res.json()).then(data => setDataStyle(data))
    }, [])


    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
            <div align="right">

            </div>
            <div className='bg-gray-100'>
                {
                    dataaStyle.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/topic1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/title1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description1 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/description1/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example1 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/example1/${dataFlow._id}`}>Update</Link>
                                </div>}



                                {dataFlow.topic2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/topic2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/title2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description2 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/description2/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example2 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/example2/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/topic3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/title3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description3 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/description3/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example3 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/example3/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/topic4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/title4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description4 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/description4/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example4 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/example4/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/topic5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/title5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description5 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/description5/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example5 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlStyle/example5/${dataFlow._id}`}>Update</Link>
                                </div>}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default HtmlStyle;