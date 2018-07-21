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
			loading: true,
			};
}




	render() {

		return (
<div className="Main">
	<Container style={{maxWidth: "1100px", padding: "0"}}>
		<Row className= "RowMain" > 
			{this.props.hiddenSidebar ? null :
			<Col 
			sm={{size:"3"}} 
			className="d-none d-sm-block testtest" 
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
			
			
			<Col>
			<ShadowScrollbars style={{height:"100%"}}>

			<Article />
			</ShadowScrollbars>
			</Col>

			</Row>
	</Container>
			
</div>

		);
	}
}

export default Main;
