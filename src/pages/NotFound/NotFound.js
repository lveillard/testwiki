import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
     <Container>
      <div className="NotFound">
        <h1>Error 155</h1>

        <Alert color="danger">
        Pagina inexistente
        </Alert>

      </div>
      </Container>
    );
  }
}

export default NotFound;
