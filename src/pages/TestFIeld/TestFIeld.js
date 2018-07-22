import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from '../../components/Loader/Loader';
import CKEditor from "react-ckeditor-component";
import Qeditor from '../../components/Qeditor/Qeditor';
import {Link} from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars';



class TestField extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      articles: [],
      loading: true
      };
}




  render() {
    const list = [ { title: 'React', url: 'https://facebook.github.io/react/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, }, { title: 'Redux', url: 'https://github.com/reactjs/redux', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];


    return (
      <div className="TestField">
        
      
        <h1> Test Field </h1>
        {list.map(item=>  
               
        <div key={item.objectID}>
        <span> <a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </div>
               
               )} 
        <br></br>
        {
        false
        ? <Loader /> 
        :   
          false 
          ? <Qeditor />
          :
        <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />  
      }
      
  
      </div>

    );
  }
}

export default TestField;
