import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


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
import FontAwesome from 'react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div ClassName="FullHeader">
           <Header />
           <SubHeader />
        </div>


        <div className="App-main" >
          
          <Switch style={{height:"80%"}}>
            <Route exact path='/' component={Main}/>
            <Route  path='/login' component={Login}/>  
            <Route  path='/editor' component={Editor}/>  
            <Route  path='/TestField' component={TestField}/>   
            <Route  path='*' component={NotFound}/>   
          </Switch>
          {this.props.children}

          
        </div>

        <div>
        <div className= "test" style={{background: "#f6f7f8", height: "100px",borderTop: "1px solid #dee5e8"}}></div>
        <Footer />
        </div>
        
      
      </div>
    );
  }
}

export default App;
