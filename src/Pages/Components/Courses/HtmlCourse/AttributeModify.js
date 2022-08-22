import React from 'react';
import "../../Courses/hoverButton.css"


const AttributeModify = () => {


    // const dataaAtt = [
    //     {
    //         id: 2,
    //         topic: "Attributes",
    //         title1: "href Attributes",
    //         title2: "The src Attribute",
    //         title3: "The width and height Attributes",
    //         title4: "The alt Attribute",
    //         title5: "The style Attribute",
    //         description1: "The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:",
    //         description2: "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:",
    //         description3: "The <img> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):",
    //         description4: "The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader.",
    //         description5: "The style attribute is used to add styles to an element, such as color, font, size, and more.",
    //         exampleTitle1: "Example: href Attribute",
    //         exampleTitle2: "Example: src Attribute",
    //         exampleTitle3: "Example: The width and height Attributes",
    //         exampleTitle4: "Example: The alt Attribute",
    //         exampleTitle5: "Example: The style Attribute",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<p>\n  <a href='www.facebook.com'>facebook</a>\n  </p>",
    //         example2: "<img src='img_girl.jpg'>",
    //         example3: "<img src='img_girl.jpg' width='500' height='600'>",
    //         example4: "<img src='img_girl.jpg' alt='Girl with a jacket'>",
    //         example5: "<p style='color:red;'>This is a red paragraph.</p>",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]



    const [dataAtt, setDataAtt] = React.useState({
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
    });





    const handleChange = (e) => {
        setDataAtt({ ...dataAtt, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Attribute</p>
                <form action="">
                    {dataAtt.title1 && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataAtt.title1 && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataAtt.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataAtt.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataAtt.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataAtt.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataAtt.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataAtt.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataAtt.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataAtt.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataAtt.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataAtt.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataAtt.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    <hr />



                    {dataAtt.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataAtt.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataAtt.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataAtt.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataAtt.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataAtt.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataAtt.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataAtt.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataAtt.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataAtt.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataAtt.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataAtt.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataAtt.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataAtt.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataAtt.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataAtt.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataAtt.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataAtt.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataAtt.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataAtt.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataAtt.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataAtt.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataAtt.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataAtt.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataAtt.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataAtt.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataAtt.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataAtt.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataAtt.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataAtt.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />


                    {dataAtt.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataAtt.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataAtt.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataAtt.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataAtt.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataAtt.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataAtt.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataAtt.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataAtt.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataAtt.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default AttributeModify;