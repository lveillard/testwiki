import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faAngleRight,
  faSearch,
  faPlusSquare,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { catList, articleList } from "../../services/articuloObj";
import {
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

library.add(faStroopwafel, faAngleRight, faSearch, faPlusSquare, faAngleDown);

class SideBar extends Component {

	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	  }
	
	  toggle() {
		this.setState({ collapse: !this.state.collapse });
	  }






  clickedArticle(articleID) {
    console.log("articulo con ID: " + articleID);
    this.props.clickedArticle(articleID);
  }

  render() {
    const listItems = this.props.articulos.map(x => (
      <li>
        <a className="hover-azul">
          <FontAwesomeIcon className="floater" icon="angle-right" />

          {x.Titulo}
        </a>
      </li>
    ));
    const catLista = catList.map(x => <h4>{x.titulo}</h4>);

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
        <h4>{y.Nombre}</h4>{" "}
        <ul>
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
                  <a className="art"> Nueva categoría </a>
                  {/*<FontAwesomeIcon  icon="angle-down"/>*/}
                </div>

                <Collapse isOpen={this.state.collapse}>
                  <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Input
                        placeholder="sm"
                        bsSize="sm"
						id="text"
                        type="text"
                        placeholder="Nombre de la categoría"
                        onKeyDown={event => {
                          if (event.key === "Enter") {
							event.preventDefault();
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
