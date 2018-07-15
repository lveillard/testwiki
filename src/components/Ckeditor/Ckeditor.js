import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import ckeditor from '../../../node_modules/react-ckeditor-component/lib/ckeditor';

class Ckeditor extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    
    onChange(evt){
      console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
           <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />
        )
    }
}

export default Ckeditor;