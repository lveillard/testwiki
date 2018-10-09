import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import Article from '../../components/Article/Article';
import Footer from '../../components/Footer/Footer';
import ShadowScrollbars from '../../components/ScrollBars/ShadowScrollbars';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { db } from "../../firebase";


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
		console.log(this.props)

		this.state = {
			articles: [],
			loading: true,
			articleID: "",
			};
}
componentWillMount(){
	console.log(this.props.match.params.id)
	this.props.match.params.id&&this.props.changeArticle(this.props.match.params.id)
	
	var current = this.props.match.params.id;

	 //test
	 true && db
	 .collection("Teams")
	 .doc("vewwBiA8t8ReLvZ3kuYB")
	 .collection("Articulos")
	 .doc(current)
	 .onSnapshot(function(doc) {
	   
	   console.log("Cambios ocurren: ");
   });

}



	render() {

      //  this.props.changeArticle(this.props.match.params.aid);
		

		return (
<div className="Main">
	
	{<Container style={{maxWidth: "1400px", padding: "0"}}>
		<Row className= "RowMain" > 
			{this.props.hiddenSidebar ? null :
			<Col 
			sm={{size:"3"}} xl="2"
			className="d-none d-sm-block testtest" 
			style={{
				padding: "0px",
				backgroundColor: "white"
				}}
			>
			<ShadowScrollbars style={{height:"100%"}}>
			<SideBar 
			clickedArticle={this.props.changeArticle} 
			categorias={this.props.categorias} 
			articulos={this.props.articulos}
			newCategory={this.props.newCategory}
			newArticle={this.props.newArticle}
 />
			</ShadowScrollbars>

			</Col> 
			}
			
			
			<Col>

			<ShadowScrollbars style={{height:"100%"}} >
			{!this.props.editor && !this.props.hiddenSidebar && <FontAwesomeIcon onClick={()=>this.props.toggleSidebar(true)} className="sideBarButton button-nav" icon="arrow-left" />}
			{!this.props. editor && this.props.hiddenSidebar && <FontAwesomeIcon onClick={()=>this.props.toggleSidebar(false)} className="sideBarButton button-nav" icon="arrow-right" />}


			<Article 
			activeArticle={this.props.activeArticle}
			updateFS= {this.props.updateFS}
			activeEditor={this.props.activeEditor}
            updateArticle={this.props.updateArticle}
			toggleEditor={this.props.toggleEditor}
			saveArticle={this.props.saveArticle}
			deleteArticle={this.props.deleteArticle}
			aid={this.props.match.params.aid}
			defaultArticleId={this.props.defaultArticleId}

			editor={this.props.editor}
			/>
			
			</ShadowScrollbars>
			</Col>
			{/*!this.props.editor&&<Col xl="2" className="sidebar-R bw d-none d-xl-block" ></Col>*/}

			</Row>
	</Container>}
			
</div>

		);
	}
}

export default Main;
