import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";
import axios from "axios";

const PythonCompiler = () => {
  const [code, setCode] = useState("a = 0");
  const [testCases, setTestCases] = useState([]);

  const submitCode = () => {
    axios.post("http://localhost:80/python", { code }).then(({ data }) => {
      setTestCases([data.passOrFail]);
    });
    // console.log(code);
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div className="absolute w-4/5 top-20 bottom-20 left-10 right-10 text-left">
      Start Your Python Code.
      {testCases.map((testCase, i) => {
        return (
          <div key={i}>
            <div>{testCase}</div>
          </div>
        );
      })}
      <CodeMirror
        value={code}
        // value="console.log('hello world!');"
        height="500px"
        theme={dracula}
        extensions={[python()]}
        onChange={onChange}
      />
      <button
        className="border-2 p-1 bg-green-600 btn btn-primary"
        onClick={submitCode}
      >
        Submit
      </button>
    </div>
  );
};

export default PythonCompiler;
