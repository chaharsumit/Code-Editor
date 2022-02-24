import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closetag";

export default class Editor extends React.Component {
  render() {
    return (
      <div className="editor-box">
        <header className="editor-header bg-grey flex">
          <ul className="circle-list flex">
            <li className="header-circle bg-red"></li>
            <li className="header-circle bg-yellow"></li>
            <li className="header-circle bg-green"></li>
          </ul>
          <h3>{this.props.displayLabel || this.props.language}</h3>
        </header>
        <CodeMirror
          value={this.props.value}
          onBeforeChange={(_editor, _data, value) =>
            this.props.handleChange(value, this.props.language)
          }
          options={{
            lineWrapping: true,
            lint: true,
            mode: this.props.language,
            lineNumbers: true,
          }}
          className="editor-body"
        />
      </div>
    );
  }
}
