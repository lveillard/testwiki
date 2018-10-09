import React, { Component } from "react";
import Loader from "../Loader/Loader";
import { Container, Row, Col } from "reactstrap";
import "./Article.css";
import contentEditable from "../../services/contentEditable.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Editor from "../../pages/Editor/Editor";
import CKEditor from "react-ckeditor-component";
import Qeditor from "../../components/Qeditor/Qeditor"


import { Switch, Route, Redirect } from "react-router-dom";



class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        id: 5294,
        title: "Articulo de pruebas",
        content: "contenido del articulo",
        lastModif: "20/06/2018",
        modifAuthor: "@John"
      },
      loading: true,
      Cont: {},
      content: "prueba",
      recibido: "hola",
      inline: false
    };
    this.onInstanceReady=this.onInstanceReady.bind(this)
  }
  componentDidMount() {
        console.log(this.props.activeArticle)

    }

    onInstanceReady(){
      var config ={
        language: "en",
        uiColor: "#f6f7f8",
        // removeButtons: 'Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,Table,HorizontalRule,Unlink,Blockquote,Link,About,SpecialChar,Indent,Outdent,RemoveFormat,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll',
        removeButtons:
          "Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,About,SpecialChar,Indent,Outdent,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll,Font",
        removeDialogTabs: "link:advanced",
        removePlugins:
          "elementspath,wsc,scayt,newpage,preview,templates,find,print,bidi,language,flash,iframe,smiley,pagebreak,div,showblocks",
        allowedContent: true,
        height: "calc(100vh - 380px)",
        resize_enabled: false,

        stylesSet: [
          { name: "Strong Emphasis", element: "strong" },
          { name: "Emphasis", element: "em" },
          {
            name: "Blue Title",
            element: "p",
            styles: {
              /*'color': 'Blue'*/
            },
            attributes: {
              class: "alert alert-primary mb-2 pt-2"
            }
          },
          {
            name: "Red Title",
            element: "p",
            styles: { color: "Red", background: "#eeeeee" }
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
      }

      var inlineCk = window.CKEDITOR.inline( 'editor1',config );
      inlineCk.on( 'instanceReady', function( ev ) {
        var editor = ev.editor;
        editor.setReadOnly( false );
        // inlineCk.setData(this.props&&this.props.activeArticle.Contenido);
      });

  

  }

  render() {
    let EditableH1 = contentEditable("h1");

    {
      /* el false ese es temporal */
    }




    return (
      <Container
        className="RowMain docnucleo"
        style={{
          paddingRight: "25px",
          paddingLeft: "25px",
          backgroundColor: "white"
        }}
      >
        <Row>
          <Col>
            <div className="App-Article" style={{/*backgroundColor: "red"*/}}>

              {false ? (
                <Loader />
              ) : (
                <Container className= "elDelmargin">

                 {/* <Qeditor value={this.props.activeArticle.Contenido} />*/}



                  <Container className = "centroArt"
                    style={{ borderBottom: "1px solid rgb(238, 238, 238" }}
                  >
                    <Row className="article-heading">

                    <Col xs="1" className="centerInside">

                     {this.props.editor && <div className="button-nav" style={{padding:"5px"}}>
                      <FontAwesomeIcon
                        onClick={()=>this.props.saveArticle()} className="size-2" icon="save" style={{color: "#28a745"}} />
                      </div>}


                      </Col>

                       <Col>
                      <EditableH1
                        updateFS={this.props.updateFS}
                        value={this.props.activeArticle.Titulo}
                      />
                      </Col>
                      <Col xs="1" className="centerInside">


                      {!this.props.editor && <div className="button-nav" style={{padding:"5px"}}>
                      <FontAwesomeIcon
                        onClick={()=>this.props.toggleEditor(true)} className="size-2" icon="edit" />
                      </div>}

                     {this.props.defaultArticleId!=this.props.activeArticle.id && this.props.editor && <div className="button-nav" style={{padding:"5px"}}>
                      <FontAwesomeIcon
                        onClick={()=>this.props.deleteArticle()} className="size-2" icon="trash" style={{color: "#dc3545"}} />
                      </div>}

                      {this.props.editor && <div className="button-nav" style={{padding:"5px"}}>
                      <FontAwesomeIcon
                        onClick={()=>this.props.toggleEditor(false)} className="size-2" icon="times" style={{color: "#dc3545"}} />
                      </div>}

                      </Col>


                    </Row>

                    <div className="article-meta">
                      {/*console.log(this.props.activeArticle)*/}

                      <p>
                        Última modificación por:{" "}
                        {this.props.activeArticle.ModifAuthor} on{" "}
                        {new Date(
                          this.state.article.lastModif.replace(" ", "T")
                        ).toDateString()}{" "}
                      </p>
                    </div>
                  </Container>
                  
                       {/*EDITOR*/} 
                  {this.props.editor && <Editor
                          activeArticle={this.props.activeArticle}
                          activeEditor={this.props.activeEditor}
                          updateArticle={this.props.updateArticle}
                        />}

                       {/*Inline EDITOR*/} 
                  {!this.props.editor && this.state.inline && <div className="article-content mt-3 px-4 py-3">
              <div id="editor1"
                      dangerouslySetInnerHTML={{
                        __html: this.props.activeArticle.Contenido
                      }}
                    />
            <CKEditor
               activeClass=""
               events={{
                    instanceReady: this.onInstanceReady
               
               }}
               scriptUrl="https://cdn.ckeditor.com/4.10.0/full/ckeditor.js"
               config={{
                            language: "en",
                            uiColor: "#f6f7f8",
                            // removeButtons: 'Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,Table,HorizontalRule,Unlink,Blockquote,Link,About,SpecialChar,Indent,Outdent,RemoveFormat,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll',
                            removeButtons:
                              "Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Anchor,Subscript,addFile,Image,About,SpecialChar,Indent,Outdent,Source,Form,Checkbox,Radio,Textarea,TextField,Select,Button,ImageButton,HiddenField,SelectAll,Font",
                            removeDialogTabs: "link:advanced",
                            removePlugins:
                              "elementspath,wsc,scayt,newpage,preview,templates,find,print,bidi,language,flash,iframe,smiley,pagebreak,div,showblocks",
                            contentsCss: [
                              "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                              "https://firebasestorage.googleapis.com/v0/b/wiki-vers.appspot.com/o/Ckeditor%2Fcontents.css?alt=media&token=81f275c9-5bd9-4775-81f8-050b16ee061d"
                            ],
                            allowedContent: true,
                            height: "calc(100vh - 380px)",
                            resize_enabled: false,

                            stylesSet: [
                              { name: "Strong Emphasis", element: "strong" },
                              { name: "Emphasis", element: "em" },
                              {
                                name: "Blue Title",
                                element: "p",
                                styles: {
                                  /*'color': 'Blue'*/
                                },
                                attributes: {
                                  class: "alert alert-primary mb-2 pt-2"
                                }
                              },
                              {
                                name: "Red Title",
                                element: "p",
                                styles: { color: "Red", background: "#eeeeee" }
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
                  </div>}

                    {/*Article*/} 
              {!this.props.editor && !this.state.inline && <div className="article-content mt-3 px-4 py-3">
              <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.activeArticle.Contenido
                      }}
                    />
              </div>}





                </Container>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Article;
