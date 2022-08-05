import React from 'react';

const HtmlCce = () => {

    const dataCce = [
        {
            id: 5,
            topic: "HTML Quotation and Citation Elements",
            title1: "HTML <blockquote> for Quotations",
            title2: "HTML <q> for Short Quotations",
            title3: "HTML <abbr> for Abbreviations",
            title4: "HTML <address> for Contact Information",
            title5: "HTML <cite> for Work Title",
            description1: "The HTML <blockquote> element defines a section that is quoted from another source. Browsers usually indent <blockquote> elements.",
            description2: "The HTML <q> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.",
            description3: "The HTML <abbr> tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.', 'Dr.', 'ASAP', 'ATM'. Marking abbreviations can give useful information to browsers, translation systems and search-engines.Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the",
            description4: "The HTML <address> tag defines the contact information for the author/owner of a document or an article. The contact information can be an email address, URL, physical address, phone number, social media handle, etc.The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element.",
            description5: "The HTML <cite> tag defines the title of a creative work (e.g. a book, apoem, a song, a movie, a painting, a sculpture, etc.).Note: A person's name is not the title of a work.  The text in the <cite> element usually renders in italic.",
            exampleTitle1: "",
            exampleTitle2: "",
            exampleTitle3: "",
            exampleTitle4: "",
            exampleTitle5: "",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "",
            example2: "",
            example3: "",
            example4: "",
            example5: "",
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
                    dataCce.map((dataFlow) =>

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

export default HtmlCce;