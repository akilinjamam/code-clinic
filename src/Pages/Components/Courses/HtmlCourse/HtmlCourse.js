import React from "react";
import { Link } from "react-router-dom";

const HtmlCourse = () => {
  return (
    <div>
      <h2 className="text-4xl text-primary mb-4">HTML Course</h2>
      <div className="flex justify-around">
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <Link to="/introduction">Introduction</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold my-3">What is HTML?</h1>
          <p>* HTML stands for Hyper Text Markup Language.</p>
          <p>* HTML is the standard markup language for creating Web pages</p>
          <p>* HTML describes the structure of a Web page</p>
          <p>* HTML consists of a series of elements</p>
          <p>* HTML elements tell the browser how to display the content</p>
          <p>
            * HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HtmlCourse;
