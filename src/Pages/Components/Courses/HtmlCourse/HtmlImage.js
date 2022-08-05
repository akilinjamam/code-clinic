import React from 'react';

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

export default HtmlImage;