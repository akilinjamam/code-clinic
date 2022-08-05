import React from 'react';

const HtmlStyle = () => {

    const dataStyle = [
        {
            id: 3,
            topic: "HTMl Styles",
            title1: "Background Color",
            title2: "Text Color",
            title3: "Fonts",
            title4: "Text Size",
            title5: "",
            description1: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
            description2: "The CSS color property defines the text color for an HTML element:",
            description3: "The CSS font-family property defines the font to be used for an HTML element:",
            description4: "The CSS font-size property defines the text size for an HTML element:",
            description5: "",
            exampleTitle1: "Example: Background Color",
            exampleTitle2: "Example: Text Color",
            exampleTitle3: "Example: Fonts",
            exampleTitle4: "Example: Text Size",
            exampleTitle5: "",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "<p style='background-color:powderblue'></p>",
            example2: "<h1 style='color:blue;'>This is a heading</h1>",
            example3: "<p style='font-family:courier'>This is a paragraph.</p>",
            example4: "<h1 style='font-size:300%;'>This is a heading</h1>",
            example5: "",
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
                    dataStyle.map((dataFlow) =>

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

export default HtmlStyle;