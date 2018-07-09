import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Progress } from 'reactstrap';
import Article from '../../components/Article/Article';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      articles: [],
      loading: true
      };
}




  render() {
    return (
      <div className="Main">
      <br></br>

        <Container>
          <Row>
          <Col md="3" lg="3">
            <row>
              <h4>Categoria 1</h4>
              <li>Artículo 1</li>
              <li>Artículo 2</li>

            </row>
            <row>
              <h4>Categoria 1</h4>
              <li>Artículo 1</li>
            </row>
          </Col>
          <Col> 
          <Article />
          </Col>
          <Col xs="2"> 
            sidebar-r
          </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Main;
