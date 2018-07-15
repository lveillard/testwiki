import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
     <Container className="RowMain">
      <div>
        <h1>Error 155</h1>

        <Alert color="danger">
        Pagina inexistente
        </Alert>

      </div>
      </Container>
      </div>
    );
  }
}

export default NotFound;
