import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col, Input } from 'reactstrap';


import {BrowserRouter as router} from 'react-router-dom';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader';

import Footer from './components/Footer/Footer';

import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import TestField from './pages/TestFIeld/TestFIeld';
import Editor from './pages/Editor/Editor';
import FontAwesome from 'react-fontawesome';
import Mousetrap from 'mousetrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import commands from './services/commands.js';

class App extends Component {

	constructor(props) {
		super(props);

		this.toggleConsole = this.toggleConsole.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.runCommand = this.runCommand.bind(this);

		this.state = {
			activeArticle: "articulo default",
			consoleActive: false,
			comando: "",
			hiddenSidebar: false
		};
	}

	notify = () => toast("Wow so easy !");

	toggleConsole(evt){
		evt.preventDefault();
		console.log("consola abierta");

		this.setState({
			consoleActive: !this.state.consoleActive

		});

		this.setState({
			comando: ""

		});

	}

	toggleSidebar(onoff){

		this.setState({
			hiddenSidebar: onoff

		});



	}
	commandSelector(comando){
		console.log(comando + " y "+ this.state.comando)
		switch(comando){
			case "sidebar:on":
			this.toggleSidebar(false);break;
			case "sidebar:off":
			this.toggleSidebar(true);break;
			case "notify":
			this.notify();break;
			default:
			console.error("el comando \"" + comando + "\" no existe")
		}
	}

	runCommand(){

	const comandos = ["sidebar:on", "sidebar:off", "notify"]
	!(comandos.indexOf(this.state.comando) > -1)
	? toast("⚠️ El comando \"" + this.state.comando + "\" no existe", {type: toast.TYPE.ERROR}) 
	: (console.log("este comando existe"),this.commandSelector(this.state.comando))


	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			comando: value

		});
	}

	handleKeyPress(evt){
		// console.log(evt.charCode)
		this.state.consoleActive && evt.charCode == "13" && (this.toggleConsole(evt), console.log(this.state.comando),this.runCommand())
		;


	}

	componentDidMount() {
		Mousetrap.bind(['ctrl+k'], this.toggleConsole);
	}

	componentWillUnmount() {
		Mousetrap.unbind(['ctrl+k'], this.toggleConsole);
	}




	render() {
			

		return (
			<div className="App">
			<ToastContainer autoClose={3000}/>
			<div className="FullHeader">
			<Header />
			<SubHeader />
			</div>



			<div className="App-main" >

			<Switch style={{height:"80%"}}>
			<Route exact path='/' render={()=><Main hiddenSidebar={this.state.hiddenSidebar}/>}/>
			<Route  path='/login' component={Login}/>
			<Route  path='/editor' component={Editor}/>
			<Route  path='/TestField' component={TestField}/>
			<Route  path='*' component={NotFound}/>
			</Switch>
			{this.props.children}


			</div>

			<div>

			{(this.state.consoleActive)
				? <div autoFocus={{backgroundColor: "black", height: "100px",borderTop: "1px solid #dee5e8"}}>
				<Input autoFocus className= "consola"
				type="text" name="consola" id="consola"
			    placeholder="Prueba un comando"
				onKeyPress={this.handleKeyPress}
				onChange={this.handleInputChange}
				/>
				</div>
				: <div className= "test" style={{backgroundColor: "#f6f7f8", height: "100px",borderTop: "1px solid #dee5e8"}}></div>
			}

			{/*<Footer />*/}
			</div>


			</div>
		);
	}
}

export default App;
