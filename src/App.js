import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {BrowserRouter as router} from 'react-router-dom';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader';

import Footer from './components/Footer/Footer';

import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
           <Header />
        </div>
        <div>
           <SubHeader />
        </div>

        <div className="App-main">
        <div>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route  path='/login' component={Login}/>   
            <Route  path='*' component={NotFound}/>   
          </Switch>
        </div>
          {this.props.children}
        </div>
        
        <div className="App-footer">
        <Footer />
        </div>
      
      </div>
    );
  }
}

export default App;
