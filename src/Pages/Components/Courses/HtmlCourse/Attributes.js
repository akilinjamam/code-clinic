import React, { useEffect, useState } from 'react';

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
            example1: "<a href='https://www.facebook.com'>Visit W3Schools</a>",
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

                            <div style={{ backgroundColor: 'lightGray', padding: '20px', borderRadius: '10px' }}>
                                <p className="text-3xl font-bold">  {dataFlow.topic} </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.title1} </p>
                                <p> {dataFlow.description1} </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.title2} </p>
                                <p> {dataFlow.description2} </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.title3} </p>
                                <p> {dataFlow.description3} </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.title4} </p>
                                <p> {dataFlow.description4} </p>

                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.title5} </p>
                                <p> {dataFlow.description5} </p>
                                <br />
                                <hr />
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle1} </p>
                                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code> {dataFlow.example1}</code> </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle2} </p>
                                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example2}</code> </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle3} </p>
                                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example3}</code> </p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle4} </p>
                                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code>{dataFlow.example4} </code></p>
                                <br />
                                <p className="text-2xl font-bold"> {dataFlow.exampleTitle5} </p>
                                <p className="bg-white mt-3 pl-3 text-red-500 rounded"> <code> {dataFlow.example5}</code> </p>
                            </div>
                        </div>)

                }
            </div>
        </div>
    );
};

export default Attributes;