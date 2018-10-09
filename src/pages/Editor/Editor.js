import React, { Component } from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import { Alert, Container, Row, Col } from "reactstrap";
import "./Editor.css";
//import CKEditor from "../../services/CKEditor.js";
import CKEditor from "react-ckeditor-component";
import { Scrollbars } from "react-custom-scrollbars";
import "../../components/Ckeditor/contents.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:
        '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Holi que tal<br /> Me en cantaria mucho</div> ',
      content:
        '<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;">Holi que tal<br /> Me en cantaria mucho</div> '
    }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    // window.CKEDITOR.inline( 'p10' );
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  // para ckeditor
  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({ content: newContent });
    this.props.updateArticle(newContent, "ContenidoTemporal");
  }

  onBlur(evt) {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste(evt) {
    console.log("afterPaste event called with event info: ", evt);
  }

  render() {
    return (
      <div className="RowMain-edit">
        <Scrollbars style={{ height: "100%" }}>
          <Container
            className="pt-0"
            style={{ maxWidth: "1400px", width: "100%" }}
          >
            <Row style={{ padding: "0" }}>
              <Col>
                {this.props.activeEditor == "ReactQuill" && (
                  <div className="Editor">
                    <ReactQuill
                      value={this.props.activeArticle.content}
                      onChange={this.handleChange}
                    />

                    <Alert padding-top="20px" color="info">
                      {this.state.text}
                    </Alert>
                  </div>
                )}

                {this.props.activeEditor == "CKEditor" && (
                  <Container className="RowMain-edit mx-0 px-0">
                    <Row>
                      <Col>
                        <CKEditor
                          activeClass="p10"
                          id="p10"
                          content={this.props.activeArticle.Contenido}
                          scriptUrl="https://cdn.ckeditor.com/4.10.0/full/ckeditor.js"
                          events={{
                            blur: this.onBlur,
                            afterPaste: this.afterPaste,
                            change: this.onChange
                          }}
                          config={{
                            language: "en",
                            uiColor: "#f6f7f8",
                            // removeButtons: 'Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,Table,HorizontalRule,Unlink,Blockquote,Link,About,SpecialChar,Indent,Outdent,RemoveFormat,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll',
                            removeButtons:
                              "Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,About,SpecialChar,Indent,Outdent,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll,Font",
                            removeDialogTabs: "link:advanced",
                            removePlugins:
                              "elementspath,wsc,scayt,newpage,preview,templates,find,print,bidi,language,flash,iframe,smiley,pagebreak,showblocks",
                            contentsCss: ['.cke_editable{padding: 10px}',' .ul {margin-bottom: "0px" !important;',
                              "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                            ],
                            allowedContent: true,
                            resize_enabled: false,
                            height: "calc(100vh - 330px)",

                            stylesSet: [
                              { name: "Strong Emphasis", element: "strong" },
                              { name: "Emphasis", element: "em" },
                              {
                                name: "Normal content",
                                element: "p",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: ""
                                },},
                              {
                                name: "primary box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-primary mb-2 pt-2"
                                },},
                                {
                                name: "secondary gray",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-secondary mb-2 pt-2"
                                },},
                                {
                                name: "success box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-success mb-2 pt-2"
                                },},
                                {
                                name: "danger box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-danger mb-2 pt-2"
                                },},
                                {
                                name: "warning box",
                                element: "p",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-warning mb-2 pt-2"
                                },},
                                {
                                name: "Info box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-info mb-2 pt-2"
                                },},
                                {
                                name: "ligth box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-light mb-2 pt-2"
                                },},
                                {
                                name: "dark box",
                                element: "div",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-dark mb-2 pt-2"
                                },
                                


                              },
                              { name: "Typewriter", element: "tt" },
                              {
                                name: "Marker",
                                element: "span",
                                attributes: { class: "mark" }
                              },
                              {
                                name: "Small",
                                element: "span",
                                attributes: { class: "small" }
                              },
                            ]
                          }}
                        />
                      </Col>
                    </Row>


                  </Container>
                )}
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
