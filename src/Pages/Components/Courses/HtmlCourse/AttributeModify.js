import React from 'react';

const AttributeModify = () => {

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
            {
                dataAtt.map((dataflow) =>

                    <div className='p-5'>
                        <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Attribute</p>
                        <form action="">
                            <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>
                            <label className="label">
                                <span className="label-text font-bold">Sub-Section Topic:</span>
                            </label>
                            <input type="text" value={dataflow.topic} className="input input-bordered input-primary w-full max-w-xs" />
                            <label class="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input type="text" value={dataflow.title1} className="input input-bordered input-primary w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <textarea value={dataflow.description1} className="textarea textarea-primary w-2/3" ></textarea>
                            <label className="label font-bold">
                                <span className="label-text">Example:</span>
                            </label>
                            <textarea value={dataflow.example1} className="textarea textarea-primary w-2/3" ></textarea>
                            <br /><br /><br />
                            <hr />



                            <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>2</p>
                            <label className="label">
                                <span className="label-text font-bold">Sub-Section Topic:</span>
                            </label>
                            <input type="text" className="input input-bordered input-primary w-full max-w-xs" />
                            <label class="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input type="text" value={dataflow.title2} className="input input-bordered input-primary w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <textarea value={dataflow.description2} className="textarea textarea-primary w-2/3" ></textarea>
                            <label className="label font-bold">
                                <span className="label-text">Example:</span>
                            </label>
                            <textarea value={dataflow.example2} className="textarea textarea-primary w-2/3" ></textarea>
                            <br /><br /><br />
                            <hr />



                            <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>3</p>
                            <label className="label">
                                <span className="label-text font-bold">Sub-Section Topic:</span>
                            </label>
                            <input type="text" className="input input-bordered input-primary w-full max-w-xs" />
                            <label class="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input type="text" value={dataflow.title3} className="input input-bordered input-primary w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <textarea value={dataflow.description3} className="textarea textarea-primary w-2/3" ></textarea>
                            <label className="label font-bold">
                                <span className="label-text">Example:</span>
                            </label>
                            <textarea value={dataflow.example3} className="textarea textarea-primary w-2/3" ></textarea>
                            <br /><br /><br />
                            <hr />



                            <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>4</p>
                            <label className="label">
                                <span className="label-text font-bold">Sub-Section Topic:</span>
                            </label>
                            <input type="text" className="input input-bordered input-primary w-full max-w-xs" />
                            <label class="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input type="text" value={dataflow.title4} className="input input-bordered input-primary w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <textarea value={dataflow.description4} className="textarea textarea-primary w-2/3" ></textarea>
                            <label className="label font-bold">
                                <span className="label-text">Example:</span>
                            </label>
                            <textarea value={dataflow.example4} className="textarea textarea-primary w-2/3" ></textarea>
                            <br /><br /><br />
                            <hr />


                            <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>5</p>
                            <label className="label">
                                <span className="label-text font-bold">Sub-Section Topic:</span>
                            </label>
                            <input type="text" className="input input-bordered input-primary w-full max-w-xs" />
                            <label class="label">
                                <span className="label-text font-bold">Title:</span>
                            </label>
                            <input type="text" value={dataflow.title5} className="input input-bordered input-primary w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-bold">Description:</span>
                            </label>
                            <textarea value={dataflow.description5} className="textarea textarea-primary w-2/3" ></textarea>
                            <label className="label font-bold">
                                <span className="label-text">Example:</span>
                            </label>
                            <textarea value={dataflow.example5} className="textarea textarea-primary w-2/3" ></textarea>
                            <br /><br /><br />
                            <hr />



                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default AttributeModify;