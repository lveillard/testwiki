import React, { Component } from "react";
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css"; // ES6

/* 
 * Simple Qeditor component that takes placeholder text as a prop 
 */
class Qeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QeditorHtml: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ QeditorHtml: html });
  }


  render() {
    return (
      <div>
        <ReactQuill
          theme="bubble"
          onChange={this.handleChange}
          value={this.props.value}
          modules={Qeditor.modules}
          formats={Qeditor.formats}
          bounds={".app"}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

/* 
 * Quill modules to attach to Qeditor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Qeditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["color","background"],
    ["bold", "italic", "underline", "strike", "blockquote",'code-block'],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/* 
 * Quill Qeditor formats
 * See https://quilljs.com/docs/formats/
 */
Qeditor.formats = [
  'h4', {
    tag: 'span', 
    class: 'h4',
},
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];



export default Qeditor;
