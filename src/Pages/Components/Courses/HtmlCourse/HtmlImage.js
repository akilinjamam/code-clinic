import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const HtmlImage = () => {

    const dataImage = [
        {
            id: 4,
            topic: "HTML Images",
            title1: "",
            title2: "HTML Images Syntax",
            title3: "The src Attribute",
            title4: "Image Size - Width and Height",
            title5: "Images in Another Folder",
            description1: "Images can improve the design and the appearance of a web page.",
            description2: "The <img> tag is empty, it contains attributes only, and does not have a closing tag.",
            description3: "The required src attribute specifies the path (URL) to the image.",
            description4: "You can use the style attribute to specify the width and height of an image.",
            description5: "If you have your images in a sub-folder, you must include the folder name in the src attribute:",
            exampleTitle1: "Example: HTML Images",
            exampleTitle2: "Example: HTML Images Syntax",
            exampleTitle3: "Example: The src Attributes",
            exampleTitle4: "Example: Image size - width and height",
            exampleTitle5: "Example: Image in another folder",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "<img src='pic_trulli.jpg' alt='Italian Trulli'>",
            example2: "<img src='url' alt='alternatetext'>",
            example3: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
            example4: "<img src='img_girl.jpg' alt='Girl in a jacket' style='width:500px;height:600px;'>",
            example5: "<img src='/images/html5.gif' alt='HTML5 Icon' style='width:128px;height:128px;'>",
            example6: "",
            example7: "",
            example8: "",
            example9: "",
            example10: ""
        },
    ]
    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>

            <div>
                {
                    dataImage.map((dataFlow) =>

                        <div>

                            <br /><br />

                            <div className='bg-gray-100' style={{ padding: '20px', borderRadius: '10px' }}>
                                {dataFlow.topic && <p className="text-3xl font-bold">  {dataFlow.topic} </p>}
                                <br />
                                {dataFlow.title1 && <p className="text-2xl font-bold"> {dataFlow.title1} </p>}
                                {dataFlow.description1 && <p className='mb-3'> {dataFlow.description1} </p>}

                                {dataFlow.example1 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example1}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example1}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                                <br />
                                {dataFlow.title2 && <p className="text-2xl font-bold"> {dataFlow.title2} </p>}
                                {dataFlow.description2 && <p className='mb-3'> {dataFlow.description2} </p>}
                                {dataFlow.example2 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title3 && <p className="text-2xl font-bold"> {dataFlow.title3} </p>}
                                {dataFlow.description3 && <p className='mb-3'> {dataFlow.description3} </p>}
                                {dataFlow.example3 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example3}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example3}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title4 && <p className="text-2xl font-bold"> {dataFlow.title4} </p>}
                                {dataFlow.description4 && <p className='mb-3'> {dataFlow.description4} </p>}
                                {dataFlow.example4 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example4}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example4}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}

                                <br />
                                {dataFlow.title5 && <p className="text-2xl font-bold"> {dataFlow.title5} </p>}
                                {dataFlow.description5 && <p className='mb-5'> {dataFlow.description5} </p>}

                                {dataFlow.example5 && <div className='flex bg-black justify-between p-2 rounded '>
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example5}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example5}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

                                </div>}
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default HtmlImage;