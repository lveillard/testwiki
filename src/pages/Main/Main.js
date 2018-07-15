import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import Article from '../../components/Article/Article';
import Footer from '../../components/Footer/Footer';
import ShadowScrollbars from '../../components/ScrollBars/ShadowScrollbars';
import './Main.css';

import SideBar from '../../components/Sidebar/Sidebar';



const divStyle = {
	margin: '0',
	color: "red",
	textAlign: "left",
	paddingLeft: '0',
	listStyleType:"none",
	overflow: "hidden",
	textOverflow: "clip",
	whiteSpace: "nowrap",
	background: "red",
	position: "absolute",
	width: "250px",
	minHeight: "350px",
	borderRight: "1px solid #eee",


};
const mainStyle = {
	width: "100%",
	paddingLeft: "250px",
	paddingTop: "20px",
}

const mainRow = {
	minHeight: "350px",

}


class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: true
			};
}




	render() {

		return (
<div className="Main">
	<Container style={{maxWidth: "1100px", padding: "0"}}>
		<Row className= "RowMain" > 
			{false ? null :
			<Col 
			sm={{size:"3"}} 
			className="d-none d-sm-block" 
			style={{
				padding: "0px",
				backgroundColor: "white"
				}}
			>
			<ShadowScrollbars style={{height:"100%"}}>
			<SideBar />
			</ShadowScrollbars>

			</Col> 
			}
			
			
			<Col style={{padding:"0"}}>
			<ShadowScrollbars style={{height:"100%"}}>
			<Article />
			</ShadowScrollbars>
			</Col>
			{/*
			<div class="col-lg-3" style={{ position: "fixed", height:"100%",overflowY:"auto"}}>
			
			</div>
			<div class="col-lg-9 col-lg-offset-3">
					Normal scrollable content
			</div>*/}

			</Row>
	</Container>
			{/*
			
				
				<div style={divStyle} className="sidebar">
				<h4>Categoria 1</h4>
							<li>Artículo 1</li>

							<h4>Categoria 2</h4>
							<li>Artículo 2</li>

							<h4>Categoria 2</h4>
							<li>Artículo 2 que es super largo y tal y cual pascual</li>
							<h4>Categoria 2</h4>
							<li>Artículo 2</li>

							<h4>Categoria 2</h4>
							<li>Artículo 2</li>

				</div>

				<section style={mainStyle}>
				<Container >
					<Row style={mainRow}>
						<Col>
							<Article />
						</Col>
						<Col xs="2">
							sidebar-r
						</Col>
					</Row>
					<Row>
					<Col className="App-footer">
				<Footer />
				</Col>
				</Row>
				</Container>
				</section>
*/}
</div>

		);
	}
}

export default Main;
