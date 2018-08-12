import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faAngleRight,
  faSearch,
  faPlusSquare,
  faAngleDown,
  faArrowLeft,
  faArrowRight,
  faEdit,
  faTimes,
  faSave,
  faFile,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Sidebar.css";
import { catList, articleList } from "../../services/articuloObj";
import {
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

library.add(faStroopwafel, faAngleRight, faSearch, faPlusSquare, faAngleDown, faArrowLeft,faArrowRight,faEdit,faTimes,faSave,faFile,faPlus,faTrash  );

class SideBar extends Component {

	constructor(props) {
		super(props);
    this.toggleCat = this.toggleCat.bind(this);
    this.toggleArt = this.toggleArt.bind(this);

		this.state = { 
      collapseCat: false,
      collapseArt: false,
      inputCategory: '',
      inputArt: '',
    };
    }
    
    toggleArt() {
      this.setState({ collapseArt: !this.state.collapseArt });
      this.setState({ inputArticle:"" });
      this.state.collapseCat==true && this.toggleCat()

  
      }
	
	  toggleCat() {
    this.setState({ collapseCat: !this.state.collapseCat });
    this.setState({ inputCategory:"" });
    this.state.collapseArt==true && this.toggleArt();
    }
    


   





  clickedArticle(articleID) {
    console.log("articulo con ID: " + articleID);
    this.props.clickedArticle(articleID);
  }

  render() {

    const prueba = catList.map(y => (
      <div key={y.id}>
        <h4>{y.titulo}</h4>{" "}
        <ul>
          {articleList.filter(x => x.grupo == y.id).map(x => (
            <li key={x.id} onClick={() => this.clickedArticle(x.id)}>
              <a className="hover-azul">
                <FontAwesomeIcon className="floater" icon="angle-right" />

                {x.titulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));

    //aqui la magia de firebase

    const pruebas = this.props.categorias.map(y => (
      <div className="cat" key={y.id}>
      <div style={{ textAlign:"center"}} ><h4 style={{display:"inline"}}>{y.Nombre}</h4>  {/*<FontAwesomeIcon style={{display:"inline"}}  className="floater mr-1 ca" style={{}} icon="plus-square" />*/}</div> 		
        <ul>
         {/*<a className="art ca"> Nuevo artículo </a>*/}
          
          {this.props.articulos.filter(x => x.Categoria == y.id).map(x => (
            <li
              className="art"
              key={x.id}
              onClick={() => this.clickedArticle(x.id)}
            >
              <a className="hover-azul">
                <FontAwesomeIcon className="floater" icon="angle-right" />

                {x.Titulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));

    return (
      <Container>
        <Row className="RowMain">
          <Col
            style={{
              padding: "0px 10px 30px 10px",
              backgroundColor: "#fbfbfb",
              borderRight: "1px solid #eee"
            }}
          >
          {/* NUEVO ARTICULO*/}
            <section clasName="newArt">
              <div className="button-art" style={{ padding: "5px 10px 5px 10px", marginTop: "10px" }}>
                <div  style={{cursor: "pointer"}} onClick={this.toggleArt} className="">
                  <FontAwesomeIcon className="ca" icon="plus-square" />
                  <a className=" art ca" > Nuevo Artículo </a>
                  

                  {/*<FontAwesomeIcon  icon="angle-down"/>*/}
                </div>
                  
               
                <Collapse  isOpen={this.state.collapseArt}>
                  <Form  className="text-align:center" >
                    <FormGroup style={{marginBottom:"0"}} >
                      
                      <Input
                        autoFocus
                        placeholder="sm"
                        bsSize="sm"
                        value={this.state.inputArticle}
                        onChange={(evt) => { this.setState({inputArticle: evt.target.value })}}
                        id="text"
                        type="text"
                        placeholder="Nombre del articulo"
                        style={{padding: "0rem 0.75rem"}}
                        onKeyDown={event => {
                          if (event.key === "Enter") {
							event.preventDefault();
              this.setState({inputArticle:"" });
              this.props.newArticle(this.state.inputArticle)
							this.toggleArt();
                          }
                        }}
                      />
                    </FormGroup>
                  </Form>
                </Collapse>
                </div>  
            </section>

           {/* NUEVA CATEGORIA*/}
            <section clasName="newCat">
              <div className="button-art" style={{ padding: "5px 10px 5px 10px",marginBottom:"10px",cursor: "pointer" }}>
                <div  style={{}} onClick={this.toggleCat} className="">
                  <FontAwesomeIcon className="ca" icon="plus-square" />
                  <a className="art ca"> Nueva categoría </a>
                  

                  {/*<FontAwesomeIcon  icon="angle-down"/>*/}
                </div>
                  
               
                <Collapse  isOpen={this.state.collapseCat}>
                  <Form  className="text-align:center" >
                    <FormGroup  style={{marginBottom:"0"}} >
                      
                      <Input
                        autoFocus
                        ref="component"
                        placeholder="sm"
                        bsSize="sm"
                        value={this.state.inputCategory}
                        onChange={(evt) => { this.setState({inputCategory: evt.target.value })}}
                        id="text"
                        type="text"
                        placeholder="Nombre de la categoría"
                        style={{padding: "0rem 0.75rem"}}
                        onKeyDown={event => {
                          if (event.key === "Enter") {
							event.preventDefault();
              this.setState({inputCategory:"" });
              this.props.newCategory(this.state.inputCategory)
							this.toggleCat();
                          }
                        }}
                      />
                    </FormGroup>
                  </Form>
                </Collapse>
                </div>  
            </section>

            <section
              className="Side"
              style={{
                overflow: "hidden"
              }}
            >
              {pruebas}
              {prueba}
            </section>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SideBar;
