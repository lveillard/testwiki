import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
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
import {commands, commandoSelector} from './services/commands.js';
import {catList,articleList} from './services/articuloObj';


class App extends Component {

	constructor(props) {
		super(props);

		this.toggleConsole = this.toggleConsole.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.runCommand = this.runCommand.bind(this);
		this.setActiveArticle = this.setActiveArticle.bind(this);

		this.state = {
			activeArticle: articleList.filter((x)=> x.id==23240)[0],
			consoleActive: false,
			comando: "",
			hiddenSidebar: false,
			debugger: true,
			editor: false
		};
	}


	notify = () => toast("Wow so easy !");

	toggleConsole(evt){
		evt.preventDefault();
		console.log("consola abierta");
		this.setState({consoleActive: !this.state.consoleActive	});
		this.setState({comando: ""});
	}

	toggleSidebar(onoff){this.setState({hiddenSidebar: onoff});}
	toggleDebugger(onoff){this.setState({debugger: onoff});}
	toggleEditor(onoff){this.setState({editor: onoff});}


	commandSelector(comando){
		
		console.log(comando + " y "+ this.state.comando)
		switch(comando){
			case "sidebar:on":
			this.toggleSidebar(false);break;
			case "sidebar:off":
			this.toggleSidebar(true);break;
			case "notify":
			this.notify();break;
			case "id":
			toast("ID del Artículo: " + this.state.activeArticle.id,{type: toast.TYPE.INFO});break;
			case "debug:on":
			this.toggleDebugger(true);break;
			case "debug:off":
			this.toggleDebugger(false);break;
			case "edit":
			this.toggleEditor(true);break;
			case "view":
			this.toggleEditor(false);break;
			default:
			console.error("el comando \"" + comando + "\" no existe")
		}
	}

	runCommand(){

	const commands = ["sidebar:on", "sidebar:off", "notify", "id", "debug:on", "debug:off", "edit", "view"]
	!(commands.indexOf(this.state.comando) > -1)
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

	setActiveArticle(articleID) {
		this.setState({ activeArticle: articleList.filter((x)=> x.id==articleID)[0]	});
	}

	handleKeyPress(evt){
		// console.log(evt.charCode)
		this.state.consoleActive && evt.charCode == "13" && (this.toggleConsole(evt), console.log(this.state.comando),this.runCommand());
	}

	componentDidMount() {
		Mousetrap.bind(['ctrl+k'], this.toggleConsole);
		console.log(this.activeArticle)
		
	}

	componentWillUnmount() {
		Mousetrap.unbind(['ctrl+k'], this.toggleConsole);
	}




	render() {

		return (
			<div className="App">
			<ToastContainer autoClose={3000}/>
			<div>
			<Header />
			<SubHeader />
			</div>



			<div className="App-main" >

			<Switch style={{height:"80%"}}>
			<Route exact path='/' render={this.state.editor ? () =><Editor
			activeArticle={this.state.activeArticle}
			/> : () =><Main 
			changeArticle={this.setActiveArticle} 
			activeArticle={this.state.activeArticle} 
			hiddenSidebar={this.state.hiddenSidebar}
			/>}
			/>
			
			<Route  path='/login' component={Login}/>
			<Route  path='/editor' render={() =><Editor
			activeArticle={this.state.activeArticle}
			/>}/>

			<Route  path='/TestField' component={TestField}/>
			<Route  path='*' component={NotFound}/>
			</Switch>
			{this.props.children}


			</div>

			<div>

			{(this.state.consoleActive)
				? <div autoFocus={{backgroundColor: "black", height: "100skpx",borderTop: "1px solid #dee5e8"}}>
				<Input autoFocus className= "consola"
				type="text" name="consola" id="consola"
			    placeholder="Prueba un comando"
				onKeyPress={this.handleKeyPress}
				onChange={this.handleInputChange}
				/>
				</div>
				: null
			}
			{(this.state.debugger)
				? <div style={{backgroundColor: "#2e66cf", height: "100px",borderTop: "1px solid #dee5e8"}}>
                {this.state.activeArticle.id}
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
