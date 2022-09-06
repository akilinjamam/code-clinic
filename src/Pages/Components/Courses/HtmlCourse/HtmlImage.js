import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const HtmlImage = () => {

    // const dataImage = [
    //     {
    //         id: 4,
    //         topic: "HTML Images",
    //         title1: "",
    //         title2: "HTML Images Syntax",
    //         title3: "The src Attribute",
    //         title4: "Image Size - Width and Height",
    //         title5: "Images in Another Folder",
    //         description1: "Images can improve the design and the appearance of a web page.",
    //         description2: "The <img> tag is empty, it contains attributes only, and does not have a closing tag.",
    //         description3: "The required src attribute specifies the path (URL) to the image.",
    //         description4: "You can use the style attribute to specify the width and height of an image.",
    //         description5: "If you have your images in a sub-folder, you must include the folder name in the src attribute:",
    //         exampleTitle1: "Example: HTML Images",
    //         exampleTitle2: "Example: HTML Images Syntax",
    //         exampleTitle3: "Example: The src Attributes",
    //         exampleTitle4: "Example: Image size - width and height",
    //         exampleTitle5: "Example: Image in another folder",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<img src='pic_trulli.jpg' alt='Italian Trulli'>",
    //         example2: "<img src='url' alt='alternatetext'>",
    //         example3: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
    //         example4: "<img src='img_girl.jpg' alt='Girl in a jacket' style='width:500px;height:600px;'>",
    //         example5: "<img src='/images/html5.gif' alt='HTML5 Icon' style='width:128px;height:128px;'>",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     },
    // ]

    const [dataImage, setDataImage] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/htmlImage';
        fetch(url).then(res => res.json()).then(data => setDataImage(data))
    }, [])


    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
            <div align="right">

            </div>
            <div className='bg-gray-100'>
                {
                    dataImage.map((dataFlow) =>
                        <div>
                            <div style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/topic1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title1 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/title1/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description1 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description1} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/description1/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example1 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/example1/${dataFlow._id}`}>Update</Link>
                                </div>}



                                {dataFlow.topic2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/topic2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title2 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/title2/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description2 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description2} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/description2/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example2 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/example2/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/topic3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title3 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/title3/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description3 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description3} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/description3/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example3 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/example3/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/topic4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title4 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/title4/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description4 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description4} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/description4/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example4 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/example4/${dataFlow._id}`}>Update</Link>
                                </div>}


                                {dataFlow.topic5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-3xl font-bold ">  {dataFlow.topic5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/topic5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.title5 && <div className='flex items-center hoverVisible'>
                                    <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/title5/${dataFlow._id}`}>Update</Link>
                                </div>}
                                {dataFlow.description5 && <div className='flex items-center hoverVisible'>
                                    <p className='mb-3'> {dataFlow.description5} </p>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/description5/${dataFlow._id}`}>Update</Link>
                                </div>}

                                {dataFlow.example5 && <div className='flex items-center hoverVisible'>
                                    <div className='flex bg-black justify-between p-2 rounded w-full'>
                                        <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                        </code></pre>
                                        <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                    </div>
                                    <Link className='hoverButton italic ml-5' to={`/courses/htmlImage/example5/${dataFlow._id}`}>Update</Link>
                                </div>}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default HtmlImage;