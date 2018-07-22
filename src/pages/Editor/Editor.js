import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Alert, Container, Row, Col } from 'reactstrap';
import './Editor.css';
//import CKEditor from "../../services/CKEditor.js";
import CKEditor from 'react-ckeditor-component'
import { Scrollbars } from 'react-custom-scrollbars';

class Editor extends Component {

    constructor(props) {
        super(props)
        this.state = {
             text: '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Holi que tal<br /> Me en cantaria mucho</div> ',
             content: '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Holi que tal<br /> Me en cantaria mucho</div> ' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.onChange = this.onChange.bind(this)

      }
      componentDidMount() {

    }
    
      handleChange(value) {
        this.setState({ text: value })
      }
    
      // para ckeditor
      onChange(evt){
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({ content: newContent })
      }
      
      onBlur(evt){
        console.log("onBlur event called with event info: ", evt);
      }
      
      afterPaste(evt){
        console.log("afterPaste event called with event info: ", evt);
      }


  render() {

    


    return (

        

        
      

    <div className="RowMain">
    <Scrollbars
style={{ height: "100%" }}>
    <Container className="pt-0" style={{ maxWidth: "1400px", width: "100%", padding: "30px"}}>
        <Row style={{padding: "0"}}> 
            <Col>


        <div className="Editor">
        <ReactQuill value={this.props.activeArticle.content}
                    onChange={this.handleChange} />

        </div> 
        <Container className="Resultado mx-0 px-0">
        <Alert padding-top="20px" color="info">
            <Row>
        {this.state.text}
            </Row>
        </Alert>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />

        <CKEditor activeClass="p10" content={this.state.content} 
              scriptUrl = 'https://cdn.ckeditor.com/4.10.0/standard/ckeditor.js'
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }} config={{
                  language: "en",
                  uiColor: "#d8e5ff",
                  removeButtons: 'Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,Table,HorizontalRule,Unlink,Blockquote,Link,About,SpecialChar,Indent,Outdent,RemoveFormat,Source',
                  removeDialogTabs: 'link:advanced',
                  removePlugins : 'wsc,scayt',

                  }}/>
  
   

        </Container>
        </Col>
       {/*<Col sm="2" className="d-none d-lg-block" >Sidebar</Col>*/} 
        </Row>
    </Container> 
    </Scrollbars>
    </div>   

        
    );
  }
}

export default Editor;
