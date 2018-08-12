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

library.add(faStroopwafel, faAngleRight, faSearch, faPlusSquare, faAngleDown, faArrowLeft,faArrowRight,faEdit,faTimes,faSave,faFile,faPlus );

class SideBar extends Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { 
      collapse: false,
      inputCategory: ''
    };
	  }
	
	  toggle() {
		this.setState({ collapse: !this.state.collapse });
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
            <section>
              <div style={{ padding: "5px 0px 0px 16px" }}>
                <div  onClick={this.toggle} className="">
                  <a className="art ca"> Nueva categoría </a>
                  {/*<FontAwesomeIcon  icon="angle-down"/>*/}
                </div>

                <Collapse isOpen={this.state.collapse}>
                  <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input
                        placeholder="sm"
                        bsSize="sm"
                        onChange={(evt) => { this.setState({inputCategory: evt.target.value })}}
                        id="text"
                        type="text"
                        placeholder="Nombre de la categoría"
                        onKeyDown={event => {
                          if (event.key === "Enter") {
							event.preventDefault();
              this.setState({inputCategory:"" });
              this.props.newCategory(this.state.inputCategory)
							this.toggle();
                          }
                        }}
                      />
                    </FormGroup>
                    <FontAwesomeIcon icon="plus-square" />
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
