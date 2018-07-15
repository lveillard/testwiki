import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Sidebar.css'
import {Link} from 'react-router-dom';

library.add(faStroopwafel,faAngleRight)


class SideBar extends Component {
  render() {
    return (
				<Container >
					<Row>
						<Col   style={{
				padding: "30px 10px 30px 30px",
				backgroundColor: "#fbfbfb",
				borderRight: "1px solid #eee",
				}}>

				<section className="Side" style={{overflow: "hidden",
				}}> 
				<h4>Categoria 1</h4>
				<ul >
					<li >
						<a className= "hover-azul">
						<FontAwesomeIcon  className="floater" icon="angle-right" />

						Artículo 1
						</a>
						<a>
						Artículo 2
						</a>
						<a>
						<FontAwesomeIcon className="floater" icon="angle-right" />

						Artículo 3 super largo y con iconito
						</a>
						

					</li>
				</ul>
				<h4>Categoria 2</h4>
				<ul>
					<li>
						<a>
						<FontAwesomeIcon className="floater" icon="angle-right" />
						Artículo 1 de nombre irrazonablemenente largo jolines
						</a>
						<a>
						Artículo 2
						</a>
						<a>
						Artículo 3
						</a>
						

					</li>
				</ul>
									<li>Artículo 1</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2 que es super largo y tal y cual pascual</li>
									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2</li>
									<h4>Categoria 1</h4>
									<li>Artículo 1</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

									<h4>Categoria 2</h4>
									<li>Artículoo 2 que es super largo y tal y cual pascual</li>
									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2</li>
									<li>Artículo 2</li>
									<h4>Categoria 1</h4>
									<li>Artículo 1</li>

									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

									<h4>Categoria 2</h4>
									<li>Artículoo 2 que es super largo y tal y cual pascual</li>
									<h4>Categoria 2</h4>
									<li>Artículo 2</li>

				</section>
				</Col>
				</Row>
				</Container>
    );
  }
}
export default SideBar;