import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Alert, Container, Row, Col } from 'reactstrap';
import './Editor.css';


class Editor extends Component {

    constructor(props) {
        super(props)
        this.state = { text: 'Empieza escribiendo algo' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
      }
    
      handleChange(value) {
        this.setState({ text: value })
      }



  render() {
    return (
    <div className>
    <Container className="pt-5" style={{ maxWidth: "1100px", width: "100%", padding: "30px"}}>
        <Row style={{padding: "0"}}> 
            <Col>


        <div className="Editor">
        <h3>Editor</h3>
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />

        </div> 
        <Container className="Resultado mx-0 px-0">
        <Alert padding-top="20px" color="info">
            <Row>
        {this.state.text}
            </Row>
        </Alert>
        </Container>
        </Col>
        <Col sm="2" className="d-none d-sm-block" >Sidebar</Col>
        </Row>
    </Container> 
    </div>   

        
    );
  }
}

export default Editor;
