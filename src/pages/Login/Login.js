import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Login.css';

class login extends Component {
  render() {
    return (
  <div className="App-Login">
    <Container>   

      <Row className="col-md-12 col-sm-12">
        <Col>
        <h3>Login</h3>
          <form>
        <div className="col-sm-12 form-group">
          <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div className="col-sm-12 form-group">
          <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>
        <div className="col-sm-12 form-group">
          <Button color="danger" onClick={this.handleSubmit} className="btn btn-default btn-block btn-lg">Sign in</Button>
        </div>
      </form>
      </Col>
</Row>

    </Container> 
    </div>   

        
    );
  }
}

export default login;
