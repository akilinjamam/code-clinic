import React, { useState, useEffect } from 'react';
import Compiler from './Compiler';
import useLocalStorage from './Hooks/useLocalStorage';
import "./Editor.css";

const Editor = () => {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <>
            <div className="pane top-pane">
                <Compiler
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Compiler
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Compiler
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <h1 className="text-3xl lg:bg-[#6c6c6d] p-3 text-center">Output</h1>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    )
};

export default Editor;