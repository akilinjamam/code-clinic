import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Attributes = () => {





    const dataAtt = [
        {
            id: 2,
            topic: "Attributes",
            title1: "href Attributes",
            title2: "The src Attribute",
            title3: "The width and height Attributes",
            title4: "The alt Attribute",
            title5: "The style Attribute",
            description1: "The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:",
            description2: "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:",
            description3: "The <img> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):",
            description4: "The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader.",
            description5: "The style attribute is used to add styles to an element, such as color, font, size, and more.",
            exampleTitle1: "Example: href Attribute",
            exampleTitle2: "Example: src Attribute",
            exampleTitle3: "Example: The width and height Attributes",
            exampleTitle4: "Example: The alt Attribute",
            exampleTitle5: "Example: The style Attribute",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "<p>\n  <a href='www.facebook.com'>facebook</a>\n  </p>",
            example2: "<img src='img_girl.jpg'>",
            example3: "<img src='img_girl.jpg' width='500' height='600'>",
            example4: "<img src='img_girl.jpg' alt='Girl with a jacket'>",
            example5: "<p style='color:red;'>This is a red paragraph.</p>",
            example6: "",
            example7: "",
            example8: "",
            example9: "",
            example10: ""
        }
    ]



    return (
        <div>
            <h2 className="text-4xl text-primary mb-4">HTML Course</h2>

            <div>
                {
                    dataAtt.map((dataFlow) =>

                        <div>

                            <br /><br />

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
                                    <pre > <code className=" mt-3  text-green-500 rounded"> {dataFlow.example2}
                                    </code></pre>
                                    <CopyToClipboard text={dataFlow.example2}><button className='btn btn-circle items-center' >copy</button ></CopyToClipboard>

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
                        </div>)

                }
            </div>
        </div>
    );
};

export default Attributes;