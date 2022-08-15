
// import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'

// const Compiler = (props) => {
//     const {
//         language,
//         displayName,
//         value,
//         onChange
//     } = props
//     const [open, setOpen] = useState(true)

//     function handleChange(editor, data, value) {
//         onChange(value)
//     }

//     return (
//         <div className="editor-container">
//             <div className="editor-title">
//                 {displayName}
//             </div>
//             <ControlledEditor
//                 onBeforeChange={handleChange}
//                 value={value}
//                 className="code-mirror-wrapper text-start"
//                 options={{
//                     lineWrapping: true,
//                     lint: true,
//                     mode: language,
//                     theme: 'material',
//                     lineNumbers: true
//                 }}
//             />
//         </div>
//     )
// };

// export default Compiler;

