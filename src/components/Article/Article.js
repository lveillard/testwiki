import React, { Component } from "react";
import Loader from "../Loader/Loader";
import { Container, Row, Col } from "reactstrap";
import "./Article.css";
import contentEditable from "../../services/contentEditable.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Editor from "../../pages/Editor/Editor";

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
      recibido: "hola"
    };
  }
  componentDidMount() {

    }

  render() {
    let EditableH1 = contentEditable("h1");

    {
      /* el false ese es temporal */
    }


    return (
      <Container
        className="RowMain"
        style={{
          paddingRight: "25px",
          paddingLeft: "25px",
          backgroundColor: "white"
        }}
      >
        <Row>
          <Col>
            <div className="App-Article">

              {false ? (
                <Loader />
              ) : (
                <Container>


                  <Container
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

                     {this.props.editor && <div className="button-nav" style={{padding:"5px"}}>
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

                  			{this.props.editor && <Editor
                          activeArticle={this.props.activeArticle}
                          activeEditor={this.props.activeEditor}
                          updateArticle={this.props.updateArticle}
                        />}

                  {!this.props.editor && <div className="article-content mt-3 px-4 py-3">
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
