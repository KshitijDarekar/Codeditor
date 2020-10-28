import React,{useState} from "react";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript.js'
import {Controlled as CodeMirror} from 'react-codemirror2'

function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props ;

    function handleChange(editor, data, value){
        onChange(value);

    }
  return (
    <>
    <div className="editor-container">
        <div className="editor-title">
            {displayName}
            <button>O/C</button>
        </div>
        
    <CodeMirror
        value={value}
        options={{
            lineWrapping : true,
            lint: true,
            mode:language,
            lineNumbers:true,
            theme:'material',
        } 
        }
        // onBeforeChange={(editor, data, value) => {
        //     this.setState(value);
        // }}
        onBeforeChange={handleChange }
        onChange={(editor, data, value) => {
        }}
        className="code-mirror-wrapper"
    />
    </div>
    </>
  );
}

export default Editor;
