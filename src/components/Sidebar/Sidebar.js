import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import {catList,articleList} from '../../services/articuloObj';


library.add(faStroopwafel,faAngleRight)



class SideBar extends Component {





	clickedArticle(articleID) {
		console.log("articulo con ID: "+ articleID)
		this.props.clickedArticle(articleID)
		}

  render() {

	const listItems =  articleList.filter((x)=> x.grupo==catList[1].id).map(x=> <li>
						<a className= "hover-azul">
						<FontAwesomeIcon  className="floater" icon="angle-right" />

		{x.titulo}
								</a>

		</li>)		
	const catLista = catList.map(x=> <h4>{x.titulo}</h4>)

	const prueba =  catList.map(y=> <div key={y.id}><h4>{y.titulo}</h4> <ul>{
		
		articleList.filter((x)=> x.grupo==y.id).map(x=> <li key={x.id} onClick={() => this.clickedArticle(x.id)} >
						<a className= "hover-azul">
						<FontAwesomeIcon  className="floater" icon="angle-right" />

		{x.titulo}
								</a>

		</li>)
		
		}</ul></div>)

    return (
				<Container >
					<Row className="RowMain">
						<Col   style={{
				padding: "30px 10px 30px 10px",
				backgroundColor: "#fbfbfb",
				borderRight: "1px solid #eee",
				}}>

				<section className="Side" style={{overflow: "hidden",
				}}> 
				{prueba }
				{prueba }


				</section>
				</Col>
				</Row>
				</Container>
    );
  }
}
export default SideBar;