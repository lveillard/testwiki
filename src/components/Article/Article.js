import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import Loader from '../../components/Loader/Loader';


class Article extends Component {

  constructor(props) {
        super(props);
        this.increaseCont = this.increaseCont.bind(this);
        this.state = {article: {}, loading: true, Cont: {}};
    }
    increaseCont(){
        this.setState({Cont: this.state.Cont + 1})
        return this.state.Cont;
    }

  render() {

    if(this.state.loading){
    
    return (
      <div className="App-Article">
      <Loader />
      </div>
    );
  } else {

    return (
        <div className="App-Article">
        <p> Article 2</p>
        </div>
      );




  }






} 

}
export default Article;