import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript.js";
import { Controlled as CodeMirror } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faExpandAlt,
  faClipboard,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Editor(props) {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const { language, displayName, value, onChange, theme } = props;

  import(`codemirror/theme/${theme}.css`);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <>
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <div className="button-group-editor">
            <button
              className="expand-collapse-btn"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
              <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
            </button>
            <CopyToClipboard text={value} onCopy={onCopyText}>
              <button className="copy-btn">
                <FontAwesomeIcon
                  icon={copied ? faClipboardCheck : faClipboard}
                />
              </button>
            </CopyToClipboard>
          </div>
        </div>

        <CodeMirror
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: theme,
          }}
          onBeforeChange={handleChange}
          onChange={(editor, data, value) => {}}
          className="code-mirror-wrapper"
        />
      </div>
    </>
  );
}

export default Editor;
