import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import { Container, Row, Col } from 'reactstrap';
import './Article.css';


class Article extends Component {

  constructor(props) {
        super(props);
        this.state = {article:
           {id: 5294,
            title: "Articulo de pruebas", 
            content:"contenido del articulo", 
            lastModif:"20/06/2018",
           modifAuthor: "@John"}, 
           loading: true, 
           Cont: {}, 
           content: "prueba", 
           recibido: "hola"};
    }
  

  render() {

    
    {/* el false ese es temporal */}

    return (
      				<Container className= "RowMain" style={{paddingRight: "25px",paddingLeft: "25px",backgroundColor: "white"}}><Row><Col>

      <div className="App-Article">
      {
        false
        ? <Loader /> 
        : 
      <Container>

      <Container style={{borderBottom:"1px solid rgb(238, 238, 238"}}>
      <div className="article-heading">
      <h1>{this.props.activeArticle.titulo}</h1>
      </div>

      <div className= "article-meta">
      <p>Última modificación por: {this.props.activeArticle.modifAuthor} on {new Date(this.state.article.lastModif.replace(' ','T')).toDateString()} </p>
      </div>
      </Container>

      <div className="article-content mt-3 px-4 py-3">
      
      {this.props.activeArticle.content}
        
      </div>
      </Container>
    }
    </div>
    </Col></Row></Container>

    );
  






} 

}
export default Article;